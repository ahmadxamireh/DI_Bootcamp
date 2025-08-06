import express from 'express';
import cookieParser from "cookie-parser";
import authMiddleware from "./authMiddleware.js";
import router from "./auth.js";

const app = express();

app.use(express.json());
app.use(cookieParser()); // enable cookie handling

// mount router
app.use('/', router);

// public route accessible without authentication
app.get('/', (req, res) => {
    res.send('Hello, JWT Authentication!')
});

// protected route that requires authentication
app.get('/profile', authMiddleware, (req, res) => {
    // access the authenticated user's details via req.user
    res.json({ message: `Welcome, ${req.user.username}!` });
});


app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});