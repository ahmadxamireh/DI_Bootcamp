import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authenticateJWT from "./authMiddleware.js";

const router = express.Router();

// sample user data
const users = [];

// secret key for JWT signing
const secretKey = 'mySecretKey';

// middleware for parsing JSON requests
router.use(bodyParser.json());
router.use(cookieParser());

// utility function to validate password strength
function isStrongPassword(password) {
    const minLength = 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    return (
        password.length >= minLength &&
        hasUpper &&
        hasLower &&
        hasNumber &&
        hasSymbol
    );
}

// store revoked refresh tokens in memory
const revokedRefreshTokens = new Set();

// endpoint for user registration
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: 'Username and password are required' });

    // username validation
    if (username.length < 4 || username.length > 20) {
        return res.status(400).json({ error: 'Username must be between 4 and 20 characters' });
    }

    // password validation
    if (!isStrongPassword(password)) {
        return res.status(400).json({
            error:
                'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
        });
    }

    // check if the username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser)
        return res.status(409).json({ error: 'Username already exists' });

    // hash the password before storing it
    const hashedPassword = bcrypt.hashSync(password, 10);

    // create a new user
    const newUser = { id: users.length + 1, username, password: hashedPassword };

    // generate a JWT for the new user
    const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, {
        expiresIn: '1h' // token expires in 1 hour
    });

    // set the JWT as an HTTP cookie
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'User registered successfully' });
});

// endpoint for user login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: 'Username or Password is required' });

    // find the user with the given username
    const user = users.find(user => user.username === username);

    if (!user)
        return res.status(401).json({ error: 'Username not found' });

    // if username found compare the password
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid)
        return res.status(401).json({ error: 'Password is invalid' });

    // generate an access JWT for the authenticated user
    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '1h' // token expires in 1 hour
    });

    // generate a refresh JWT with a longer expiration time
    const refreshToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '7d' // Refresh token expires in 7 days
    })

    // set the access JWT as an HTTP cookie
    res.cookie('token', accessToken, { httpOnly: true });

    // set the refresh JWT as an HTTP cookie
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    res.status(200).json({ message: 'Login successful' });
});

// endpoint for JWT refresh
router.post('/refresh', (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken)
        return res.status(401).json({ error: 'Refresh token not found' });

    // check if the refresh token is revoked
    if (revokedRefreshTokens.has(refreshToken))
        return res.status(403).json({ error: 'Refresh token has been revoked' });

    jwt.verify(refreshToken, secretKey, (err, decoded) => {
        if (err)
            return res.status(403).json({ error: 'Refresh token verification failed' });

        // generate a new access token
        const accessToken = jwt.sign({ id: decoded.id, username: decoded.username }, secretKey, {
            expiresIn: '1h'
        });

        // set the new access token as an HTTP cookie
        res.cookie('token', accessToken, { httpOnly: true });
        res.status(200).json({ message: 'Token refreshed successfully' });
    });
});

// endpoint to refresh the user profile
router.post('/update-profile', authenticateJWT, (req, res) => {
    const { username, password } = req.body;
    const currentUser = users.find(user => user.id === req.user.id);

    if (!currentUser)
        return res.status(404).json({ error: 'User not found' });

    // update the username if provided
    if (username) {
        // validate new username
        if (username.length < 4 || username.length > 20) {
            return res.status(400).json({ error: 'Username must be between 4 and 20 characters' });
        }

        // check if the new username already exists
        const taken = users.find(user => user.username === username && user.id !== currentUser.id);
        if (taken)
            return res.status(409).json({ error: 'Username already taken' });

        // save the new username
        currentUser.username = username;
    }

    // update the password if provided
    if (password) {
        // validate new password
        if (!isStrongPassword(password))
            return res.status(400).json({
                error: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
            });

        // hash and save the new password
        currentUser.password = bcrypt.hashSync(password, 10);
    }

    // issue a new token with possibly new username
    const newToken = jwt.sign({ id: currentUser.id, username: currentUser.username }, secretKey, {
        expiresIn: '1h'
    });

    // set the new access token as an HTTP cookie
    res.cookie('token', newToken, { httpOnly: true });
    res.status(200).json({ message: 'Profile updated successfully' });
});

// endpoint for user logout
router.post('/logout', (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    // revoke the refresh token if present
    if (refreshToken)
        revokedRefreshTokens.add(refreshToken);

    // clear the JWT cookie
    res.clearCookie('token');
    res.clearCookie('refreshToken');

    res.status(200).json({ message: 'Logout successful' });
});

export default router;