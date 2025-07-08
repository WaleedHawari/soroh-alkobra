import { twMerge } from "tailwind-merge";

interface Props {
    children: string;
    variant: "primary" | "secondary" | "dark";
    size?: "md" | "lg";
}

export const SectionTitle = ({ children, variant, size = "lg" }: Props) => {
    return (
        <h1
            className={twMerge(
                variant == "primary"
                    ? "text-primary border-primary"
                    : variant == "dark"
                    ? "text-dark border-dark"
                    : "text-white border-white",
                size == "md" ? "text-xl" : "text-2xl border-b-4",
                "font-bold pb-2 w-fit mb-8"
            )}
        >
            {children}
        </h1>
    );
};
