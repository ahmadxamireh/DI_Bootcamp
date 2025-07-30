import './App.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask.jsx";

function App() {
    return (
        <Provider store={store}>
            <AddTask />
            <TaskList/>
        </Provider>
    )
}

export default App
