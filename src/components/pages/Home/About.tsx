import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Section } from "@/components/Section";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export const About = () => {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <Section className="relative bg-[url(/home/about.png)] bg-no-repeat bg-cover bg-right-top">
            <Container className="relative z-10">
                <SectionTitle variant="secondary">{t("Home.about-title")}</SectionTitle>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-10 text-white">
                    <p>{t("Home.about-description")}</p>
                    <img
                        src="/sa-logo.png"
                        alt="soroh-allkobra-logo"
                        className={twMerge(locale == "ar" ? "sm:-ml-24 md:-ml-24" : "sm:-mr-20 md:-mr-24", "object-contain sm:relative")}
                        width={160}
                    />
                </div>
            </Container>
            <div className="absolute inset-0 bg-primary opacity-60"></div>
        </Section>
    );
};
