import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { ProjectPage } from "@/components/pages/Project";

export default function HomePage({
    params,
}: {
    params: Promise<{ locale: string, id: string }>;
}) {
    const { locale, id } = use(params);
    // Enable static rendering
    setRequestLocale(locale);

    return <ProjectPage id={id} />;
}
