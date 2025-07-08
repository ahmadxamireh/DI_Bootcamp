import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // parse JSON bodies

// in-memory list to trak our tasks
let todos = [];

// Create a new todo: POST /api/todos
app.post('/api/todos', (req, res) => {
    const newPost = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed
    }
    todos.push(newPost);
    res.status(201).json(newPost);
});

// Get all todos: GET /api/todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Get a specific todo: GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) return res.status(404).send('The requested todo task was not found');
    res.json(todo);
});

// Update a todo: PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index < 0) return res.status(404).send('The requested todo task was not found');
    const updatedTodo = {
        id: todoId,
        title: req.body.title,
        completed: req.body.completed
    };
    todos[index] = updatedTodo;
    res.json(updatedTodo);
});

// Delete a todo: DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index < 0) return res.status(404).send('The requested todo task was not found');
    const toBeDeleted = todos.splice(index, 1);
    res.json(toBeDeleted);
});

// handle unmatched routes
app.use((req, res) => {
    res.status(404).send('Route Not Found');
})

// start the Express server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));