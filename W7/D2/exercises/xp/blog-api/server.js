// Exercise 1 : Building a RESTful API with database connection

import express from "express";
import dotenv from 'dotenv';
import router from './server/routes/blogRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON bodies

// mount router
app.use('/posts', router);

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// global error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // optional for debugging
    res.status(500).json({ error: 'Internal Server Error' });
});

// start Express server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));