import { useState } from "react";
import ThemeContext from './ThemeContext.jsx';

const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;