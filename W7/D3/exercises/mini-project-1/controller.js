import fs from "fs/promises";
import tasks from './tasks.json' with { type: 'json' };

// gets the largest id and adds 1 to get the next available id
let currentId = Math.max(...tasks.map(t => t.id)) + 1;

// GET /tasks: Retrieve a list of all tasks from a JSON file.
export async function getAllTasks(req, res) {
    return res.json(tasks);
}

// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
export async function getTaskById(req, res) {
    const taskId = Number(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (!task) return res.status(404).send(`Task with ID ${taskId} not found`);
    res.json(task);
}

// POST /tasks: Create a new task and store it in the JSON file.
export async function createTask(req, res) {
    const name = req.body.name;
    if (!name) return res.status(400).send('Task name is missing');
    const newTask = {
        id: currentId,
        name: name,
        isDone: false
    };
    tasks.push(newTask); // add to the tasks array
    await updateTasksArray(newTask, tasks, res, 201);
    currentId++;
}

// PUT /tasks/:id: Update a task by ID in the JSON file.
export async function updateTask(req, res) {
    const id = Number(req.params.id);
    const index = tasks.findIndex(task => task.id === id);
    if (index < 0) return res.status(404).send(`Task with ID ${id} not found`);
    const updatedTask = {
        id: tasks[index].id,
        name: req.body.name ?? tasks[index].name,
        isDone: req.body.isDone ?? tasks[index].isDone
    }
    tasks[index] = updatedTask;
    await updateTasksArray(updatedTask, tasks, res);
}

// DELETE /tasks/:id: Delete a task by ID from the JSON file.
export async function deleteTask(req, res) {
    const id = Number(req.params.id);
    const index = tasks.findIndex(task => task.id === id);
    if (index < 0) return res.status(404).send(`Task with ID ${id} not found`);
    const [deletedTask] = tasks.splice(index, 1);
    await updateTasksArray(deletedTask, tasks, res);
}

// helper function to update the json file
async function updateTasksArray(task, tasksArr, res, status = 200) {
    try {
        // write the array back to the tasks.json file (overwrites)
        await fs.writeFile('./tasks.json', JSON.stringify(tasksArr, null, 2));
        res.status(status).json(task);
    } catch (err) {
        res.status(500).send('Internal server error');
    }
}