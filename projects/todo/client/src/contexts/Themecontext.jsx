import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <themeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}