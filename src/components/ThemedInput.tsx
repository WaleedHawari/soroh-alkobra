import React from "react";
import { twMerge } from "tailwind-merge";

interface ThemedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
}

export const ThemedInput = ({
    className,
    label,
    ...props
}: ThemedInputProps) => {
    return (
        <>
            {label && <label className="text-lg font-semibold">{label}</label>}
            <input
                className={twMerge(
                    className,
                    "w-full border border-gray-200 rounded p-2"
                )}
                {...props}
            />
        </>
    );
};
