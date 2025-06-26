import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Contact } from "@/components/pages/Contact";

export default function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    // Enable static rendering
    setRequestLocale(locale);

    return <Contact />;
}
