import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-primary" />
            ) : (
                <Sun className="w-5 h-5 text-primary" />
            )}
        </button>
    );
}
