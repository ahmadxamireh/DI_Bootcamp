import { useState } from 'react'
import './App.css'

function App() {
    const [ languages, setLanguages ] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
    ])

    const voteLanguage = (event) => {
        setLanguages(languages.map(language =>
            language.name === event.target.value ? { ...language, votes: language.votes + 1 } : language
        ));
    };

    return (
        <>
            <h1>Vote Your Language!</h1>
            {languages.map((language, i) => (
                <div key={i}>
                    <span>{language.votes}</span>
                    <span>{language.name}</span>
                    <button onClick={voteLanguage} value={language.name}>Click Here</button>
                </div>
            ))}
        </>
    )
}

export default App
