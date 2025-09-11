import { useLocalStorage } from "@/utils/useLocalStorage";
import { useEffect } from "react";

type Theme = 'light' | 'dark';

export function useTheme(): [Theme, () => void] {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(current => current === 'light' ? 'dark' : 'light');
    };

    return [theme, toggleTheme];
}