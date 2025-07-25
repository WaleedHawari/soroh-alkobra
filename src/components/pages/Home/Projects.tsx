import { Section } from "@/components/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
// import { ThemedButtton } from "@/components/ThemedButtton";
import React from "react";
import { Project } from "@/components/Project";

export const Projects = () => {
    const t = useTranslations();
    const locale = useLocale();

    const projects = [
        {
            id: 1,
            title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
            items: [
                "/projects/1.png",
                "/projects/2.jpg",
                "/projects/3.jpeg",
                "/projects/5.jpeg",
                "/projects/6.jpeg",
                "/projects/7.jpeg",
                "/projects/8.jpeg",
                "/projects/9.jpeg",
                "/projects/10.jpeg",
                "/projects/11.jpeg",
                "/projects/12.jpeg",
                "/projects/13.jpeg",
                "/projects/14.jpeg",
                "/projects/15.jpeg",
                "/projects/16.jpeg",
                "/projects/17.jpeg",
                "/projects/18.jpeg",
                "/projects/19.jpeg",
                "/projects/20.jpeg",
            ],
        },
        {
            id: 2,
            title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
            items: [
                "/projects/21.jpeg",
                "/projects/22.jpeg",
                "/projects/23.jpeg",
                "/projects/24.jpeg",
                "/projects/25.jpeg",
                "/projects/26.jpeg",
                "/projects/27.jpeg",
                "/projects/28.jpeg",
                "/projects/29.jpeg",
                "/projects/30.jpeg",
                "/projects/31.jpeg",
                "/projects/32.jpeg",
            ],
        },
        {
            id: 3,
            title: { ar: "خرسانات", en: "Concretes" },
            items: [
                "/projects/33.jpeg",
                "/projects/34.jpeg",
                "/projects/35.jpeg",
                "/projects/36.jpeg",
                "/projects/37.jpeg",
                "/projects/38.jpeg",
                "/projects/39.jpeg",
                "/projects/40.jpeg",
            ],
        },
    ];

    return (
        <Section>
            <Container>
                <SectionTitle variant="primary">{t("Navigation.projects")}</SectionTitle>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
                        {projects.map((item, index) => (
                            <React.Fragment key={index}>
                                {/* <div className="flex gap-8">
                                <SectionTitle variant="primary" size="md">
                                    {locale == "ar" ? item.title.ar : item.title.en}
                                </SectionTitle>
                                <Link href={"/projects/" + item.id}>
                                    <ThemedButtton variant="primary">{t("Services.button")}</ThemedButtton>
                                </Link>
                            </div> */}
                                {item.items.slice(0, 1).map((e, index) => (
                                    <Link key={index} href={"/projects/" + item.id}>
                                        <Project image={"/home/banner.jpg"} title={locale == "ar" ? item.title.ar : item.title.en} />
                                    </Link>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
