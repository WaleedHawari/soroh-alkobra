import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { ServicePage } from "@/components/pages/Service";

export default function HomePage({
    params,
}: {
    params: Promise<{ locale: string, id: string }>;
}) {
    const { locale, id } = use(params);
    // Enable static rendering
    setRequestLocale(locale);

    return <ServicePage id={id} />;
}
