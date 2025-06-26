import React from "react";
import { twMerge } from "tailwind-merge";

interface ThemedTextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    label?: string;
}

export const ThemedTextarea = ({ className, label, ...props }: ThemedTextareaProps) => {
    return (
        <>
            {label && <label className="text-lg font-semibold">{label}</label>}
            <textarea className={twMerge(className, "w-full border border-gray-200 rounded p-2")} {...props}></textarea>
        </>
    );
};
