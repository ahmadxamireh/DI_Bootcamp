import './App.css'
import TaskProvider from "./TaskProvider.jsx";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import FilterButtons from "./FilterButtons.jsx";

function App() {
    return (
        <TaskProvider>
            <h2>Task Manager</h2>
            <AddTask/>
            <FilterButtons/>
            <TaskList/>
        </TaskProvider>
    )
}

export default App
