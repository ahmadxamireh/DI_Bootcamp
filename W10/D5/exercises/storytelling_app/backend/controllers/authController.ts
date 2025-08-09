import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../db';
import isStrongPassword from "../helpers/passwordChecker";
import isValidEmail from "../helpers/emailChecker";
import { JWT_SECRET, NODE_ENV, REFRESH_SECRET } from "../helpers/envVarChecker";

// register a new user
export const registerUser = async (req: Request, res: Response) => {
    try {
        // extract input from the request body
        const { username, email, password } = req.body;

        // check if all fields are provided
        if (!username || !email || !password)
            return res.status(400).json({ error: "Username, email and password are required." });

        // validate email
        if (!isValidEmail(email))
            return res.status(400).json({ error: "Invalid email format" });

        // validate password
        if (!isStrongPassword(password))
            return res.status(400).json({ error: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character" });

        // check if the username already exists
        const existingUsername = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [ username ]
        );
        if (existingUsername.rows.length > 0)
            return res.status(409).json({ error: "Username already exists" });

        // check if the email already exists
        const existingEmail = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [ email ]
        );
        if (existingEmail.rows.length > 0)
            return res.status(409).json({ error: "The email is already in use" });

        // if all is good, hash the password and insert the new user info in the db
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query("" +
            "INSERT INTO users (username, email, password_hash) " +
            "VALUES ($1, $2, $3) " +
            "RETURNING id, username, email",
            [ username, email, hashedPassword ]
        );

        // return the new user details
        res.status(201).json({ user: result.rows[0] });

    } catch (error) {
        console.error("register error:", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// login a user and issue an access and refresh tokens
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body || {}; // if nothing was provided, assign an empty object

        // validate user input
        if (!email || !password)
            return res.status(400).json({ error: "email and password are required" })

        // validate email
        if (!isValidEmail(email))
            return res.status(400).json({ error: "Invalid email format" });

        // find the user in the db
        const userQuery = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [ email ]);
        const user = userQuery.rows[0];

        if (!user)
            return res.status(401).json({ error: "Email does not exist in the database" });

        // if the email exists, compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch)
            return res.status(401).json({ error: "Invalid password" });

        // if all is good, generate an access and refresh tokens
        const accessToken = jwt.sign(
            { userId: user.id },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        const refreshToken = jwt.sign(
            { userId: user.id },
            REFRESH_SECRET,
            { expiresIn: "7d" }
        );

        // set refresh token as HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: NODE_ENV === "production", // only send cookie over https in production
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // return access token to the client
        return res.json({ accessToken });

    } catch (error) {
        console.error("login error:", error)
        return res.status(500).json({ error: "internal server error" })
    }
}

// issue a new access token using the refresh token from cookies
export const refreshToken = async (req: Request, res: Response) => {
    try {
        // get the refresh token from cookies
        const token = req.cookies.refreshToken;
        if (!token)
            return res.status(403).json({ error: "Access denied. Refresh token missing or expired." });

        // verify the refresh token
        jwt.verify(token, REFRESH_SECRET as string, (err, decoded) => {
            if (err || !decoded || typeof decoded !== "object")
                return res.status(403).json({ error: 'Refresh token verification failed' });

            const { userId } = decoded as { userId: number };

            // generate new short-lived access token
            const newAccessToken = jwt.sign(
                { userId: userId },
                JWT_SECRET,
                { expiresIn: "1h" }
            );

            // send the new access token
            return res.json({ accessToken: newAccessToken });
        });
    } catch (error) {
        console.error("refresh error:", error)
        res.status(500).json({ error: "internal server error" });
    }
}

// logout the user by clearing the refresh token cookie
export const logoutUser = (req: Request, res: Response) => {
    // clear the HttpOnly refreshToken cookie
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: NODE_ENV === "production",
        sameSite: "strict",
    });

    return res.status(200).json({ message: "Logged out successfully" });
};