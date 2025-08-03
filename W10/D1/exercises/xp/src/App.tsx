import {Greeting} from "./Greeting.tsx";
import {Counter} from "./Counter.tsx";
import './App.css'
import {UserCard} from "./UserCard.tsx";
import {UserList} from "./UserList.tsx";

function App() {
    return (
        <>
            <Greeting name={"Ahmad"} messageCount={7}/>
            <Counter/>
            <UserCard/>
            <UserCard name={"Jason"} role={"Driver"}/>
            <UserList/>
        </>
    )
}

export default App
