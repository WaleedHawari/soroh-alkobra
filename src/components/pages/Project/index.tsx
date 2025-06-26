import NotFound from "@/app/[locale]/not-found";
import { Layout } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import { PageTitle } from "@/components/PageTitle";
import { Project } from "@/components/Project";
import { useLocale } from "next-intl";

interface Props {
    id: string;
}

export const ProjectPage = ({ id }: Props) => {
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

    const project = projects.find((item) => item.id == Number(id));

    if (!project) return <NotFound />;

    return (
        <Layout>
            <PageTitle>{locale == "ar" ? project.title.ar : project.title.en}</PageTitle>
            <Container className="pt-14 pb-24 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
                    {project.items.map((e, index) => (
                        <Project key={index} image={e} />
                    ))}
                </div>
            </Container>
        </Layout>
    );
};
