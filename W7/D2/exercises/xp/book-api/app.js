// Exercise 2 : Building a Basic CRUD API with database connection

import express from 'express';
import dotenv from 'dotenv';
import router from './server/routes/booksRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON bodies

app.use('/api/books', router); // mount router

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

// start Express server
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));