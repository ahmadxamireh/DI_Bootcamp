let tasks = [];

const input = document.getElementById("task-input");

const tasksList = document.getElementById("listTasks");

const addBtn = document.getElementById("add-task");
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
    input.value = ""; // reset input field
});

const clearBtn = document.getElementById("clear-tasks");
clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tasks = []; // clear the tasks array
    tasksList.innerHTML = ""; // clear the task elements from the DOM
})

let taskID = 0;

/**
 * Adds a new task to the task list. The task is created with a unique ID,
 * input text, and a default "not done" status. It generates the necessary
 * HTML elements for task display, including a delete button and a checkbox
 * for marking the task as done, and appends the task to the task list.
 *
 * @return {void} This method does not return a value.
 */
function addTask() {
    const inputValue = input.value;
    if (inputValue !== "") {

        let task = {
            task_id: taskID,
            text: inputValue,
            done: false
        };

        tasks.push(task);

        const taskParagraph = document.createElement("p");
        taskParagraph.textContent = inputValue;
        taskParagraph.setAttribute('data-task-id', taskID)

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.id = "deleteTask";
        deleteTaskBtn.textContent = 'X';
        deleteTaskBtn.addEventListener("click", (e) => {
            e.preventDefault();
            deleteTask(task)
        })

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox${taskID}`;
        checkbox.setAttribute("aria-label", inputValue);
        checkbox.addEventListener("change", () => {
            doneTask(task, taskParagraph);
        })

        const taskDiv = document.createElement("div");
        taskDiv.appendChild(deleteTaskBtn);
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskParagraph);

        tasksList.appendChild(taskDiv);

        taskID += 1;
    }
}

function doneTask(task, taskParagraph) {
    if (task.done) {
        task.done = false;
        taskParagraph.classList.toggle("line-through", task.done);
    } else {
        task.done = true;
        taskParagraph.classList.toggle("line-through", task.done);
    }
}

function deleteTask(task) {
    // 1. Remove from tasks array
    const index = tasks.findIndex(t => t.task_id === task.task_id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    // 2. Remove from DOM
    const taskElement = document.querySelector(`[data-task-id='${task.task_id}']`);
    if (taskElement) {
        taskElement.parentElement.remove(); // remove the <div> containing the task
    }
}