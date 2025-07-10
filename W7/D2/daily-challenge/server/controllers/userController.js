import * as Users from '../models/userModel.js';

export async function handleRegistration(req, res) {
    try {
        const newUser = await Users.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function handleLogin(req, res) {
    try {
        const user = await Users.loginUser(req.body);
        res.status(200).json({ message: 'Login successful!', user });
    } catch (err) {
        res.status(401).json({ error: err.message }); // unauthorized
    }
}

export async function getAllUsers(req, res) {
    try {
        const users = await Users.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error. Failed to fetch users.', message: err.message });
    }
}

export async function getUserById(req, res) {
    try {
        const userId = req.params.id;
        const user = await Users.getUserById(userId);
        if (!user) return res.status(404).send(`User with ID ${userId} not found`);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error. Failed to fetch user.', message: err.message });
    }
}

export async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const updatedUser = await Users.updateUser(req.params.id, req.body);
        if (!updatedUser) return res.status(404).send(`User with ID ${userId} not found`);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error. Failed to update user.', message: err.message });
    }
}

export async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const deletedUser = await Users.deleteUser(userId);
        if (!deletedUser) return res.status(404).send(`User with ID ${userId} not found`);
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error. Failed to delete user.', message: err.message });
    }
}