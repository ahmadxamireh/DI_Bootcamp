import express from 'express';
import * as Controller from '../controllers/userController.js';

const router = express.Router();

// POST /register: Allow users to register by providing a username and password.
// Hash the password using bcrypt before storing it in the database
router.post('/register', Controller.handleRegistration);

// POST /login: Allow users to login by providing their username and password.
// Compare the hashed password from the JSON file with the provided password.
router.post('/login', Controller.handleLogin);

// GET /users: Retrieve a list of all registered users from the database
router.get('/users', Controller.getAllUsers);

// GET /users/:id: Retrieve a specific user by ID from the database
router.get('/users/:id', Controller.getUserById);

// PUT /users/:id: Update a user’s information by ID in the database
router.put('/users/:id', Controller.updateUser);

// extra: DELETE /users/:id: Delete a user from the database
router.delete('/users/:id', Controller.deleteUser);

export default router;