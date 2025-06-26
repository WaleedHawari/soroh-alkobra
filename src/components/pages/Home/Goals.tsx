import { Section } from "@/components/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { IconTarget } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export const Goals = () => {
    const goals_length = 10;
    const t = useTranslations();

    return (
        <Section>
            <Container>
                <SectionTitle variant="primary">{t("Home.goals")}</SectionTitle>
                <div className="space-y-6">
                    {Array.from({ length: goals_length }).map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <IconTarget />
                            <p>{t(`Home.goal-${index + 1}`)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
