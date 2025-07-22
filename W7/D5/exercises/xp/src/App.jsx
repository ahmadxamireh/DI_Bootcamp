import Car from './Car.jsx'
import Garage from './Garage.jsx'
import Events from "./Events.jsx";
import Phone from './Phone.jsx'
import Color from "./Color.jsx";
import './App.css'

function App() {
    const carinfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            <Car model={carinfo.model}/>
            <Garage size="small" />
            <Events />
            <Phone />
            <Color />
        </>
    )
}

export default App
