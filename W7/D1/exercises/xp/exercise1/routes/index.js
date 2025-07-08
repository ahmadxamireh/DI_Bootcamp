// Exercise 1: Creating a Simple Express.js Application with Routes

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to homepage');
});

router.get('/about', (req, res) => {
    res.send('Welcome to about page');
});

// 404 handler
router.use((req, res) => {
  res.status(404).send('Page not found');
});

export default router;