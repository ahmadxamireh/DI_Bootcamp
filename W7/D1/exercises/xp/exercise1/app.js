import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// mount the router at a specific path
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));