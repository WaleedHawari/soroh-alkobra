import { twMerge } from "tailwind-merge";

interface Props {
    children: string;
    variant: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
}

export const ThemedButtton = ({
    children,
    className,
    variant,
    onClick,
}: Props) => {
    return (
        <button
            className={twMerge(
                className,
                variant == "primary" && "text-white bg-primary",
                variant == "secondary" && "text-white bg-dark",
                " rounded-full px-4 py-3 cursor-pointer"
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
