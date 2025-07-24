import React from "react";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '', userInput: '', serverResponse: '' }
    }

    async componentDidMount() {
        try {
            const response = await fetch('/api/hello');
            const data = await response.text();
            this.setState({ message: data });
            console.log('Component mounted');
        } catch (err) {
            console.error(err);
        }
    }

    handleChange = (e) => {
        this.setState({ userInput: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/world', {
                method: 'POST',
                body: JSON.stringify({ message: this.state.userInput }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.text();
            this.setState({ serverResponse: data });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <>
                <h3><strong>Post to Server:</strong></h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                    <button type={"submit"}>Submit</button>
                </form>

                {this.state.serverResponse && (<h4>{this.state.serverResponse}</h4>)}
            </>
        );
    }
}

export default App

// server.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
    const { message } = req.body;
    console.log("The message received from the client:", message);
    res.send(`I received your POST request. This is what you sent me: ${message}`);
});

app.listen(PORT, () => {
    console.log(`The server running on port ${PORT}`);
});