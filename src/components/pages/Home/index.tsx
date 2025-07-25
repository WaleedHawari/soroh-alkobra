import { About } from "./About";
import { Goals } from "./Goals";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Layout } from "@/components/layout";
import { Slider } from "./Slider";
import { useTranslations } from "next-intl";

const Home = () => {
    const t = useTranslations();
    const slides = [
        {
            imageUrl: "/home/banner.jpg",
            ctaLink: "/Soroh-Al-kobra-co.-profile.pdf",
            ctaText: t("Home.hero-cta"),
            title: t("Home.hero-title"),
            subtitle: t("Home.hero-description"),
        },
        {
            imageUrl: "/home/banner.jpg",
            ctaLink: "/Soroh-Al-kobra-co.-profile.pdf",
            ctaText: t("Home.hero-cta"),
            title: t("Home.hero-title"),
            subtitle: t("Home.hero-description"),
        },
        {
            imageUrl: "/home/banner.jpg",
            ctaLink: "/Soroh-Al-kobra-co.-profile.pdf",
            ctaText: t("Home.hero-cta"),
            title: t("Home.hero-title"),
            subtitle: t("Home.hero-description"),
        },
    ];
    return (
        <Layout>
            <main>
                {/* <Hero /> */}
                <Slider slides={slides} />
                <About />
                <Goals />
                <Services />
                <Projects />
            </main>
        </Layout>
    );
};

export default Home;
