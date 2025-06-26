import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const className = "dark";
        const html = document.documentElement;

        if (localStorage.theme === "dark") {
            html.classList.add(className);
            setIsDark(true);
        } else if (localStorage.theme === "light") {
            html.classList.remove(className);
            setIsDark(false);
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemPrefersDark) {
                html.classList.add(className);
            } else {
                html.classList.remove(className);
            }
            setIsDark(systemPrefersDark);
        }
    }, []);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        const className = "dark";
        if (html.classList.contains(className)) {
            html.classList.remove(className);
            localStorage.theme = "light";
            setIsDark(false);
        } else {
            html.classList.add(className);
            localStorage.theme = "dark";
            setIsDark(true);
        }
    };

    return [isDark, toggleDarkMode] as const;
};
