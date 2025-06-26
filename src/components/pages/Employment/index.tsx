import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";
import { ThemedInput } from "@/components/ThemedInput";
import { ThemedTextarea } from "@/components/ThemedTextarea";

export const Employment = () => {
    const t = useTranslations();
    return (
        <Layout>
            <PageTitle>{t("Navigation.employment")}</PageTitle>
            <Container className="pt-14 pb-24">
                <p className="text-center font-semibold text-3xl text-primary">{t("Employment.title")}</p>
                <form action="https://formspree.io/f/mwpbbzor" method="POST" className="space-y-5">
                    <ThemedInput name="name" label={t("Employment.name")} />
                    <ThemedInput name="job" label={t("Employment.job")} />
                    <ThemedTextarea name="message" label={t("Employment.message")} />
                    <ThemedInput name="cv" label={t("Employment.cv")} type="file" />
                    <button type="submit" className="text-white bg-primary rounded-full px-4 py-3 cursor-pointer w-full">
                        {t("Employment.send")}
                    </button>
                </form>
            </Container>
        </Layout>
    );
};
