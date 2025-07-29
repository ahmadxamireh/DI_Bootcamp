import './App.css'
import AddTask from "./components/AddTask.jsx";
import TasksList from "./components/TasksList.jsx";

function App() {

    return (
        <>
            <h1>Task Planner</h1>
            <hr/>
            <AddTask/>
            <hr/>
            <TasksList/>
        </>
    )
}

export default App
