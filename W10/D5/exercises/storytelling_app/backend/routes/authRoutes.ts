import express from "express";
import { registerUser, loginUser, refreshToken, logoutUser } from "../controllers/authController";

const router = express.Router();

// handle user registration
router.post('/register', registerUser);

// handle user login
router.post('/login', loginUser);

// handle access token refresh using refresh token cookie
router.post('/refresh', refreshToken);

// handle logout and clear cookie
router.post("/logout", logoutUser);

export default router;