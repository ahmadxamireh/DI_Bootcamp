import express from "express";
import router from './routes/triviaRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // parse JSON bodies

// mount router
app.use('/quiz', router);

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// start express server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));