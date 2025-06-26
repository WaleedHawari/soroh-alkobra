import { About } from "./About";
import { Goals } from "./Goals";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Layout } from "@/components/layout";

const Home = () => {
    return (
        <Layout>
            <main>
                <Hero />
                <About />
                <Goals />
                <Services />
                <Projects />
            </main>
        </Layout>
    );
};

export default Home;
