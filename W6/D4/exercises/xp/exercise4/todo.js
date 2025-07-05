// Exercise 4: Todo List using ES6 module syntax
// 1. Create two files: todo.js and app.js.
// 2. In todo.js, define an ES6 module that exports a TodoList class.
// 3. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// 4. Export the TodoList class.

export class TodoList {
    tasks = []

    addTask(task) {
        this.tasks.push(task);
    }

    markComplete(taskName) {
        if (this.tasks.length === 0) return console.log('Tasks array is empty');
        for (let task of this.tasks) {
            if (task.name.toLowerCase() === taskName.toLowerCase()) {
                task.isComplete = true;
                return;
            }
        }
        return console.log('Task not found');
    }

    listTasks() {
        console.log('____TASKS____')
        this.tasks.forEach(task => {
            console.log(task);
        })
    }
}