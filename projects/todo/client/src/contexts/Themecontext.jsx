import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

export function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        console.log("Themed:",darkMode);
        } else {
        console.log("Themer:",darkMode);
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])

    const toggleTheme = () => {
        console.log("Theme:",darkMode);
        
        setDarkMode(!darkMode);
    }

    return (
            <themeContext.Provider value={{ darkMode, toggleTheme }}>
                {children}
            </themeContext.Provider>
    )
}