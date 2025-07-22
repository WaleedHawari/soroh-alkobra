"use client";

import { Container } from "./Container";
import { ThemedButtton } from "../ThemedButtton";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { DarkModeSwitcher } from "../DarkModeSwitcher";

export const Header = () => {
    const t = useTranslations();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((open) => !open);
    };

    return (
        <header className="bg-white">
            <Container as="nav" className="text-dark gap-8  py-7">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <img src="/sa-logo.png" alt="logo" width={100} />
                    </Link>
                    <ul className={twMerge(menuOpen ? "block" : "hidden", "items-center justify-between gap-8 md:flex space-y-4")}>
                        <li>
                            <Link href={"/"}>{t("Navigation.home")}</Link>
                        </li>
                        <li>
                            <Link href={"/projects"}>{t("Navigation.projects")}</Link>
                        </li>
                        <li>
                            <Link href={"/services"}>{t("Navigation.services")}</Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>{t("Navigation.contact")}</Link>
                        </li>
                        <li>
                            <Link href={"/employment"}>
                                <ThemedButtton variant="secondary">{t("Navigation.employment")}</ThemedButtton>
                            </Link>
                        </li>
                        <LanguageSwitcher />
                        <DarkModeSwitcher />
                    </ul>
                    {menuOpen ? (
                        <IconX onClick={toggleMenu} className="block md:hidden" />
                    ) : (
                        <IconMenu2 onClick={toggleMenu} className="block md:hidden" />
                    )}
                </div>
            </Container>
            <div className="border-t-[12px] border-primary"></div>
        </header>
    );
};
