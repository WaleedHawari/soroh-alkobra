import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Section } from "@/components/Section";
import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations();
    return (
        <Section className="relative bg-[url(/home/about.png)] bg-no-repeat bg-cover bg-right-top">
            <Container className="relative z-10">
                <SectionTitle variant="secondary">
                    {t("Home.about-title")}
                </SectionTitle>
                <div className="flex flex-col sm:flex-row justify-between gap-8 text-white">
                    <p>{t("Home.about-description")}</p>
                    <img
                        src="/sa-logo.png"
                        alt=""
                        className="p-6 bg-white rounded-xl object-contain"
                        width={160}
                    />
                </div>
            </Container>
            <div className="absolute inset-0 bg-primary opacity-60"></div>
        </Section>
    );
};
