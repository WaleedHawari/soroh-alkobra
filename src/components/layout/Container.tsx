import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
}

export const Container = ({
    as: Component = "div",
    className,
    children,
}: Props) => {
    return (
        <Component
            className={twMerge(
                className,
                "px-7 sm:px-20 md:px-24 lg:px-28 max-w-[1920px] mx-auto"
            )}
        >
            {children}
        </Component>
    );
};
