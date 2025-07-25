import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";
import { IconMailFilled, IconMapPinFilled, IconPhoneFilled } from "@tabler/icons-react";

export const Contact = () => {
    const t = useTranslations();
    return (
        <Layout>
            <PageTitle>{t("Navigation.contact")}</PageTitle>
            <Container className="pt-14 pb-24">
                <div className="flex items-center justify-between flex-col md:flex-row gap-8">
                    <div className="bg-primary rounded-xl text-white flex flex-col items-center p-8 w-full">
                        <IconMailFilled size={32} className="mb-4" />
                        <p>info@soroh-alkobra.com</p>
                    </div>
                    <div className="bg-primary rounded-xl text-white flex flex-col items-center p-8 w-full">
                        <IconPhoneFilled size={32} className="mb-4" />
                        <p>+966531944425</p>
                    </div>
                    <div className="bg-primary rounded-xl text-white flex flex-col items-center p-8 w-full">
                        <IconMapPinFilled size={32} className="mb-4" />
                        <p>Jeddah, King Fahd Road, Mohammed Al-Tawil Street</p>
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden mt-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.255992637977!2d39.191771599999996!3d21.5368434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d18af0eb318f%3A0xab60237dddc3d859!2z2LTYsdmD2Kkg2LXYsdmI2K0g2KfZhNmD2KjYsdmJINmE2YTZhdmC2KfZiNmE2KfYqg!5e0!3m2!1sfr!2sma!4v1753466358515!5m2!1sfr!2sma"
                        width="100%"
                        height="400"
                        loading="lazy"
                    ></iframe>
                </div>
            </Container>
        </Layout>
    );
};
