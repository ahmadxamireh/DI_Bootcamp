import triviaQuestions from '../data/triviaQuestions.js';

// in-memory store
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz: Start the quiz and display the first question.
export const getQuiz = (req, res) => {
    // restart the quiz
    score = 0;
    currentQuestionIndex = 0;
    res.send(currentQuestion(0).question);
};

// POST /quiz: Submit an answer to the current question and move to the next question.
export const submitAnswer = (req, res) => {
    if (currentQuestionIndex >= triviaQuestions.length) return res.send("The quiz has ended.")

    const answer = req.body.answer.toLowerCase();
    if (!answer) return res.status(400).send('Answer is missing.');

    if (currentQuestion(currentQuestionIndex).answer.toLowerCase() !== answer) {
        currentQuestionIndex++;
        return res.send(`Wrong answer!.\n\n${getNextQuestion(currentQuestionIndex)}`);
    }
    score++;
    currentQuestionIndex++;
    return res.send(`Correct answer!\n\n${getNextQuestion(currentQuestionIndex)}`);
};

// GET /quiz/score: Display the user’s final score at the end of the quiz
export const getScore = (req, res) => {
    res.send(`Your final score is: ${score}/${triviaQuestions.length}`);
};

// helper function to get the current question
const currentQuestion = (currentQuestionIndex) => triviaQuestions[currentQuestionIndex];

// helper function to move to the next question
const getNextQuestion = (index) => {
    if (index >= triviaQuestions.length) return "The quiz has ended."
    return `Next question: ${triviaQuestions[index].question}`;
};