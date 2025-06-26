import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/layout/Container";
import { useLocale, useTranslations } from "next-intl";
import { Project } from "@/components/Project";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import { ThemedButtton } from "@/components/ThemedButtton";

export const Projects = () => {
    const t = useTranslations();
    const locale = useLocale();
    // const projects = [
    //     {
    //         title: {
    //             ar: "تشطيبات داخلية",
    //             en: "Interior finishes",
    //         },
    //         image: "/projects/1.png",
    //     },
    //     {
    //         title: {
    //             ar: "تشطيبات داخلية",
    //             en: "Interior finishes",
    //         },
    //         image: "/projects/2.jpg",
    //     },
    //     {
    //         title: {
    //             ar: "تشطيبات داخلية",
    //             en: "Interior finishes",
    //         },
    //         image: "/projects/3.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/5.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/6.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/7.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/8.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/9.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/10.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/11.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/12.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/13.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/14.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/15.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/16.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/17.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/18.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/19.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات داخلية", en: "Interior finishes" },
    //         image: "/projects/20.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/21.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/22.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/23.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/24.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/25.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/26.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/27.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/28.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/29.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/30.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/31.jpeg",
    //     },
    //     {
    //         title: { ar: "تشطيبات خارجية", en: "Exterior finishes" },
    //         image: "/projects/32.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/33.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/34.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/35.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/36.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/37.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/38.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/39.jpeg",
    //     },
    //     {
    //         title: { ar: "خرسانات", en: "Concretes" },
    //         image: "/projects/40.jpeg",
    //     },
    // ];

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
        <Layout>
            <PageTitle>{t("Navigation.projects")}</PageTitle>
            <Container className="pt-14 pb-24">
                <div className="space-y-8">
                    {projects.map((item, index) => (
                        <div key={index}>
                            <div className="flex gap-8">
                                <SectionTitle variant="primary">{locale == "ar" ? item.title.ar : item.title.en}</SectionTitle>
                                <Link href={"/projects/" + item.id}>
                                    <ThemedButtton variant="primary">{t("Services.button")}</ThemedButtton>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
                                {item.items.slice(0, 6).map((e, index) => (
                                    <Link key={index} href={"/projects/" + item.id}>
                                        <Project image={e} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
};
