// Daily Challenge : Registration & Login
// Create a User Management API with Registration and Login using Express.js, Bcrypt, and Database

import express from "express";
import dotenv from "dotenv";
import router from './server/routes/userRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON bodies

app.use('/', router); // mount router

// 404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});


// start express server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));