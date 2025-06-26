import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Employment } from "@/components/pages/Employment";

export default function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <Employment />;
}
