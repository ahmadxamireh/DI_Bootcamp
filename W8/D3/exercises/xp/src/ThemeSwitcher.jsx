import { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    );
}

export default ThemeSwitcher;