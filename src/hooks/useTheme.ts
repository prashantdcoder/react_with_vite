import React from 'react';
import { ThemeContext } from '../context/ThemeToggleContext';
import { ThemeContextProp } from '../utils/types';

const useTheme = () => {
    const themeContext = React.useContext<ThemeContextProp>(ThemeContext);
    if (!themeContext) {
        throw Error('use theme context within provider');
    }
    const { theme, toggleTheme } = themeContext;
    return { theme, toggleTheme };
}

export default useTheme;