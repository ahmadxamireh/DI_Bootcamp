// Create a Task Management API with Express.js and JSON File Storage

import express from 'express';
import router from "./routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/tasks', router);

// 404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');
})

// start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));