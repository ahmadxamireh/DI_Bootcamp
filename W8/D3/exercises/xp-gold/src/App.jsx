import './App.css'
import TaskProvider from "./TaskProvider.jsx";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

function App() {
    return (
        <TaskProvider>
            <AddTask/>
            <TaskList/>
        </TaskProvider>
    )
}

export default App
