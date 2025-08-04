import quotes from './quotes.js';
import { useState } from "react";

export default function QuoteView() {
    const [ currentQuote, setCurrentQuote ] = useState({});

    const colors = [
        "#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#845EC2", "#FF9671", "#00C9A7"
    ];

    const [currentColor, setCurrentColor] = useState("#ffffff"); // default background

    function getNewQuote() {
        let newQuote = {};
        do {
            let randIndex = Math.floor(Math.random() * quotes.length);
            newQuote = quotes[randIndex];
        } while (currentQuote === {} || currentQuote === newQuote)
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentQuote(newQuote);
        setCurrentColor(randomColor);
    }

    if (currentQuote !== {}) {
        return (
            <div style={{ backgroundColor: currentColor}}>
                {Object.keys(currentQuote).length !== 0 ? (
                    <>
                        <h1>"{currentQuote.quote}"</h1>
                        <p>{currentQuote.author}</p>
                    </>
                ) : (
                    <p>Click the button to get a quote!</p>
                )}
                <button onClick={getNewQuote}>New Quote</button>
            </div>
        );
    }
}