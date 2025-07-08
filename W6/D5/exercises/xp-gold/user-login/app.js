import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = []; // in-memory store

// Middleware to verify JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// bonus: Middleware to check for required role
function authorizeRole(requiredRole) {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).send('Access denied: insufficient permissions');
        }
        next();
    };
}

// bonus: check password complexity
function isStrongPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

// User Registration: POST /api/register
app.post('/api/register', (req, res) => {
    const { username, password, role = 'user' } = req.body;
    if (!username || !password) return res.status(400).send("Missing credentials");
    if (!isStrongPassword(password)) {
        return res.status(400).send("Password must be 8+ chars and include upper, lower, number, and special char.");
    }

    const existing = users.find(u => u.username === username);
    if (existing) return res.status(409).send("Username already exists");

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) return res.status(500).send(err);
        users.push({
            username,
            hashedPassword: hash,
            role,
            failedAttempts: 0,
            lockedUntil: null
        });
        res.status(201).send("User registered");
    });
});

// User Login: POST /api/login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).send('Wrong username');

    const now = Date.now();
    if (user.lockedUntil && now < user.lockedUntil) {
        return res.status(403).send("Account temporarily locked. Try again later.");
    }

    bcrypt.compare(password, user.hashedPassword, (err, isMatch) => {
        if (err) return res.status(500).send(err);
        if (!isMatch) {
            user.failedAttempts++;
            if (user.failedAttempts >= 5) {
                user.lockedUntil = now + 15 * 60 * 1000; // lock for 15 minutes
                return res.status(403).send("Account locked due to too many failed attempts.");
            }
            return res.status(401).send("Wrong password");
        }

        // reset lockout counters
        user.failedAttempts = 0;
        user.lockedUntil = null;

        const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    });
});

// User Profile: GET /api/profile - protected route
app.get('/api/profile', authenticateToken, (req, res) => {
    const user = users.find(u => u.username === req.user.username);
    if (!user) return res.sendStatus(404);
    res.json({ username: user.username, role: user.role });
});

// bonus: Admin-only route
app.get('/api/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.send("Welcome, Admin! This route is protected.");
});

// catch all for unknown routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});