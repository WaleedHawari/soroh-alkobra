"use client";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "../i18n/navigation";
import { Button } from "./ui/button";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentLanguage, setCurrentLanguage] = useState("en");

    useEffect(() => {
        const savedLanguage =
            document.cookie
                .split("; ")
                .find((row) => row.startsWith("NEXT_LOCALE="))
                ?.split("=")[1] || "en";
        setCurrentLanguage(savedLanguage);

        const urlLanguage = pathname.split("/")[1];
        if (["en", "ar"].includes(urlLanguage)) {
            setCurrentLanguage(urlLanguage);
        }
    }, [pathname]);

    const changeLanguage = (newLanguage: string) => {
        setCurrentLanguage(newLanguage);
        document.cookie = `NEXT_LOCALE=${newLanguage}; path=/;`;

        const segments = pathname.split("/");
        if (["en", "ar"].includes(segments[1])) {
            segments[1] = newLanguage;
        } else {
            segments.splice(1, 0, newLanguage);
        }

        router.push(segments.join("/"));
        router.refresh();
    };

    const languageLabels = {
        ar: "EN",
        en: "AR",
    };

    return (
        <Button
            className="cursor-pointer hover:bg-transparent"
            onClick={() => {
                if (currentLanguage == "ar") changeLanguage("en");
                else changeLanguage("ar");
            }}
            variant="ghost"
            size="sm"
        >
            {languageLabels[currentLanguage as keyof typeof languageLabels]}
        </Button>
    );
};

export default LanguageSwitcher;
