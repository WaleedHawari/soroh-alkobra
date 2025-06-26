import { Header } from "./Header";
import { Footer } from "./Footer";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Link href="https://wa.me/+966531944425" className="fixed z-50 bottom-4 right-4 p-4 rounded-full bg-[#4FCE5D]">
                <IconBrandWhatsapp size={32} color="#ffff" />
            </Link>
            <Footer />
        </>
    );
};
