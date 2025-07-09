import express from 'express';
import { getQuiz, submitAnswer, getScore } from '../controllers/triviaControllers.js';

const router = express.Router();

router.get('/', getQuiz);
router.post('/', submitAnswer);
router.get('/score', getScore);

export default router;