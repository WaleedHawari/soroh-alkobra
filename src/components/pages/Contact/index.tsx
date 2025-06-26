import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";
import {
    IconMailFilled,
    IconMapPinFilled,
    IconPhoneFilled,
} from "@tabler/icons-react";

export const Contact = () => {
    const t = useTranslations();
    return (
        <Layout>
            <PageTitle>{t("Navigation.contact")}</PageTitle>
            <Container className="pt-14 pb-24">
                <div className="flex items-center justify-between flex-col md:flex-row gap-8">
                    <div className="bg-primary rounded-xl text-white flex flex-col items-center p-8 w-full">
                        <IconMailFilled size={32} className="mb-4" />
                        <p>info@sarouh.com</p>
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
                        title="map"
                        width="100%"
                        height="400"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jeddah,%20King%20Fahd%20Road,%20Mohammed%20Al-Tawil%20Street+()&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </Container>
        </Layout>
    );
};
