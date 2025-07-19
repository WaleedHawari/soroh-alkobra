import { Container } from "./Container";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <footer className="bg-primary py-7 text-white">
            <Container>
                <div className="flex justify-between">
                    <Link href="/">
                        <img src="/sa-logo.png" alt="logo" width={100} />
                    </Link>
                    <img src="/2030.png" alt="saudi vision" width={100} className="object-contain" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-8 mt-14 mb-8">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/">{t("Navigation.home")}</Link>
                        </li>
                        <li>
                            <Link href="/projects">{t("Navigation.projects")}</Link>
                        </li>
                        <li>
                            <Link href="/services">{t("Navigation.services")}</Link>
                        </li>
                    </ul>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/contact">{t("Navigation.contact")}</Link>
                        </li>
                        <li>
                            <Link href="/employment">{t("Navigation.employment")}</Link>
                        </li>
                    </ul>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <IconPhoneFilled />
                            <p>{locale == "ar" ? "966531944425+" : "+966531944425"}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IconMailFilled />
                            <p>info@soroh-alkobra.com</p>
                        </div>
                    </div>
                </div>
                <hr className="border-white mb-3" />
                <p>
                    {t("copyright")} {new Date().getFullYear()} &#169;
                </p>
            </Container>
        </footer>
    );
};
