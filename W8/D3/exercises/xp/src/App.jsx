import ThemeProvider from './ThemeProvider.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import CharacterCounter from './CharacterCounter.jsx';

import './App.css'

function App() {

    return (
        <ThemeProvider>
            <ThemeSwitcher />
            <CharacterCounter />
        </ThemeProvider>
    )
}

export default App