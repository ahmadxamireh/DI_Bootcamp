import express from "express";

const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const name = req.body.name;

    if (!name) return res.status(400).send('Task name is missing');

    const newTask = {
        id: todos.length + 1,
        name: name,
        isDone: false
    };
    todos.push(newTask);
    res.status(201).json(newTask);
})

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const taskId = Number(req.params.id);
    const index = todos.findIndex(task => task.id === taskId);
    if (index < 0) return res.status(404).send('Task not found');

    const isDone = req.body.isDone;
    if (!isDone) return res.status(400).send('Task isDone status is missing');
    if (isDone.toLowerCase() !== 'true' && isDone.toLowerCase() !== 'false')
        return res.status(400).send('Task isDone status must be either true or false');

    todos[index].isDone = isDone.toLowerCase() === 'true';
    res.json(todos[index]);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const taskId = Number(req.params.id);
    const index = todos.findIndex(task => task.id === taskId);
    if (index < 0) return res.status(404).send('Task not found');
    const toBeDeleted = todos.splice(index, 1);
    res.json(toBeDeleted);
});

export default router;