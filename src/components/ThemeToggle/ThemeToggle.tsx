import React from 'react';
import useTheme from '../../hooks/useTheme';
import { ThemeMode } from '../../utils/types';
import { Button } from '../ui/button';
import './ThemeToggle.css';
import { MoonIcon, SunIcon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const buttonText: string = `Switch to ${theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK} theme`;
    const buttonIcon = theme === ThemeMode.DARK ? <SunIcon /> : <MoonIcon />;
    return (
        <div className='theme-button-container'>
            <Button className='toggle-btn' value="change theme" onClick={toggleTheme}>
                {buttonText}
                {buttonIcon}
            </Button>
        </div>
    )
}

export default ThemeToggle;