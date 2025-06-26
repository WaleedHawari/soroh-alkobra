import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
}

export const Section = ({ children, className }: Props) => {
    return <div className={twMerge(className, "py-24")}>{children}</div>;
};
