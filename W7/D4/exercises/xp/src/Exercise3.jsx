import { Component } from "react";
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class Exercise extends Component {
    render() {
        return (
            <>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para">This is a Paragraph</p>
                <a>This is a Link</a>
                <form>
                    <h2>This is a Form:</h2>
                    <input type="text" placeholder="Your name" />
                    <button type="submit">Submit</button>
                </form>
                <h3>Here is an Image:</h3>
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
                <h4>This is a List:</h4>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </>
        );
    }
}

export default Exercise;