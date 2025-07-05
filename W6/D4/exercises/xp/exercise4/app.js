// 5. In app.js, import the TodoList class from the todo.js module.

import {TodoList} from './todo.js';

// 6. Create an instance of the TodoList class.

let todoList = new TodoList();

// 7. Add a few tasks, mark some as complete, and list all tasks.

todoList.addTask({name: 'Do dishes', isComplete: false});
todoList.addTask({name: 'Do homework', isComplete: true});
todoList.addTask({name: 'Go shopping', isComplete: false});

// test

todoList.listTasks()
todoList.markComplete('do dishes');
todoList.listTasks()