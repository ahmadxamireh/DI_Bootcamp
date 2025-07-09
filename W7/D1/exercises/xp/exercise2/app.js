import express from 'express';
import router from './routes/todos.js'

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // parse JSON bodies

// mount router
app.use('/todos', router);

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// start Express server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));