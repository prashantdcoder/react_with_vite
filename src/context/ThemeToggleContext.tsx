import React, { useEffect, useState } from "react";
import { ThemeContextProp, ThemeMode } from "../utils/types";

export const ThemeContext = React.createContext<ThemeContextProp>(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<ThemeMode>(ThemeMode.LIGHT);
    const ThemeClass = {
        [ThemeMode.LIGHT]: 'light-mode',
        [ThemeMode.DARK]: 'dark-mode'
    }
    useEffect(() => {
        const node: HTMLElement = document.querySelector("html") as HTMLElement;
        addThemeClass(node, theme);
    }, [theme]);

    const addThemeClass = (node: HTMLElement, themeMode: ThemeMode): void => {
        const currentTheme: string = themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
        removeThemeClass(node, ThemeClass[currentTheme]),
            node.classList.add(ThemeClass[themeMode]);
    }

    const removeThemeClass = (node: HTMLElement, themeClass: string): void => {
        node.classList.remove(themeClass);
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
    }
    return (<>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    </>);
};

export default ThemeProvider;