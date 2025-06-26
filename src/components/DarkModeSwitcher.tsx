import { useDarkMode } from "@/hooks/useDarkMode";
import {
    IconMoonFilled,
    IconSunFilled,
} from "@tabler/icons-react";
import React from "react";

export const DarkModeSwitcher = () => {
    const [isDark, toggleDarkMode] = useDarkMode();
    return (
        <div className="mb-4 cursor-pointer">
            {isDark ? (
                <IconSunFilled onClick={toggleDarkMode} />
            ) : (
                <IconMoonFilled onClick={toggleDarkMode} />
            )}
        </div>
    );
};
