import { Container } from "@/components/layout/Container";
import { ThemedButtton } from "@/components/ThemedButtton";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Hero = () => {
    const t = useTranslations();
    return (
        <Container className="min-h-[20vw] flex flex-col sm:flex-row items-center justify-between pt-8 ">
            <div className="space-y-8">
                <h1 className="text-primary text-lg sm:text-2xl md:text-5xl font-semibold">
                    {t("Home.hero-title")}
                </h1>
                <p className="text-base md:text-3xl">
                    {t("Home.hero-description")}
                </p>
                <Link href="./Soroh-Al-kobra.pdf" target="_blank">
                <ThemedButtton variant="primary">
                    {t("Home.hero-cta")}
                </ThemedButtton>
                </Link>
            </div>
            <img
                src="/home/hero.png"
                alt="hero"
                className="object-contain w-48 md:w-[300px]"
                width={300}
            />
        </Container>
    );
};
