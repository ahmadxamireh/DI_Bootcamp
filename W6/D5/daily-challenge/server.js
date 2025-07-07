// Set up an Express server to handle the game.
import express from "express";
import {getRandomEmojiAndOptions} from "./emojis.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies and serve static frontend files
app.use(express.json());
app.use(express.static('public'));

// GET /game : Responds with a random emoji and multiple-choice options
app.get('/game', (req, res) => {
    const question = getRandomEmojiAndOptions();
    res.json(question);
});

// POST /guess : Receives player's guess and returns whether it was correct, also updates the player's score
app.post("/guess", (req, res) => {
    const {guess, correctAnswer} = req.body;
    const isCorrect = guess === correctAnswer;

    res.json({correct: isCorrect});
});

// start the Express server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));