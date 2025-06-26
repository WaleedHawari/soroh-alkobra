import { Container } from "./layout/Container";

interface Props {
    children: string;
    background?: string;
}

export const PageTitle = ({ children }: Props) => {
    return (
        <div className="bg-primary">
            <Container>
                <h1 className={"text-white text-2xl sm:text-5xl font-bold py-24"}>{children}</h1>
            </Container>
        </div>
    );
};
