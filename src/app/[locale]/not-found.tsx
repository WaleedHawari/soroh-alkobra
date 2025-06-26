import { Layout } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import { ThemedButtton } from "@/components/ThemedButtton";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
    const t = useTranslations();
    return (
        <Layout>
            <Container className="pt-14 pb-32 space-y-4">
                <>
                    <h1 className="font-semibold text-3xl text-primary">{t("Not-found.title")}</h1>
                    <p>{t("Not-found.description")}</p>
                    <Link href="/">
                        <ThemedButtton variant="primary">{t("Not-found.button")}</ThemedButtton>
                    </Link>
                </>
            </Container>
        </Layout>
    );
}
