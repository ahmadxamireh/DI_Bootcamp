import express from "express";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

// example: GET /api/profile
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: "This is your profile", user: req.user });
});

export default router;