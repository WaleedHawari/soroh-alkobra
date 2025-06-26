import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Section } from "@/components/Section";
import { useLocale, useTranslations } from "next-intl";
import { IconAccessPoint, IconBackhoe, IconBuilding, IconRestore, IconShield, IconTool } from "@tabler/icons-react";
import Link from "next/link";

export const Services = () => {
    const t = useTranslations();
    const locale = useLocale();
    // const services = [
    //     {
    //         title: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         description: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         image: "./home/services.png",
    //     },
    //     {
    //         title: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         description: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         image: "./home/services.png",
    //     },
    //     {
    //         title: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         description: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         image: "./home/services.png",
    //     },
    //     {
    //         title: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         description: {
    //             ar: "خدمة",
    //             en: "Service",
    //         },
    //         image: "./home/services.png",
    //     },
    // ];

    // const services = [
    //     {
    //         title: { ar: "صب الأساسات الخرسانية", en: "Concrete Foundation Pouring" },
    //         description: {
    //             ar: "تنفيذ القواعد والأساسات بدقة لضمان المتانة والثبات.",
    //             en: "Accurate execution of foundations to ensure strength and stability.",
    //         },
    //         image: "/services/1.jpg",
    //     },
    //     {
    //         title: { ar: "دهانات وزخرفة داخلية", en: "Interior Painting and Decoration" },
    //         description: { ar: "تنفيذ تشطيبات جمالية عصرية للمساحات الداخلية.", en: "Stylish and aesthetic finishes for interior spaces." },
    //         image: "/services/5.jpeg",
    //     },
    //     {
    //         title: { ar: "تركيب الأرضيات", en: "Floor Installation" },
    //         description: {
    //             ar: "تنفيذ أرضيات سيراميك وباركيه ورخام بجودة عالية.",
    //             en: "High-quality ceramic, parquet, and marble flooring.",
    //         },
    //         image: "/services/6.jpg",
    //     },
    //     {
    //         title: { ar: "تشطيبات الواجهات الخارجية", en: "Exterior Facade Finishing" },
    //         description: { ar: "تشطيبات مقاومة للظروف الجوية ومظهر جذاب.", en: "Weather-resistant and visually appealing facade work." },
    //         image: "/services/7.jpg",
    //     },
    //     {
    //         title: { ar: "الأسقف المستعارة والجبسية", en: "Gypsum suspended ceilings" },
    //         description: { ar: "تصاميم سقفية حديثة مع إنارة مدمجة.", en: "Modern ceiling designs with integrated lighting." },
    //         image: "/services/8.jpg",
    //     },
    //     {
    //         title: { ar: "تصميم الهياكل المعدنية", en: "Steel Structure Design" },
    //         description: {
    //             ar: "تصميمات هندسية دقيقة تلبي أعلى معايير الأمان.",
    //             en: "Accurate engineering designs meeting safety standards.",
    //         },
    //         image: "/services/9.png",
    //     },
    //     {
    //         title: { ar: "تجميع وتركيب الجسور الحديدية", en: "Steel Bridge Assembly" },
    //         description: {
    //             ar: "تصنيع وتجميع جسور للممرات الصناعية والمشاة.",
    //             en: "Fabrication and assembly of bridges for industrial use.",
    //         },
    //         image: "/services/11.jpg",
    //     },
    //     {
    //         title: { ar: "أنظمة المراقبة والتحكم", en: "Surveillance and Control Systems" },
    //         description: { ar: "تركيب كاميرات ومراقبة ذكية لضمان الأمان.", en: "Smart surveillance camera installation for safety." },
    //         image: "/services/14.jpg",
    //     },
    //     {
    //         title: { ar: "تركيب نقاط الشبكة الداخلية", en: "Internal Network Points Setup" },
    //         description: { ar: "توزيع نقاط الإنترنت لضمان تغطية مثالية.", en: "Internal internet point setup for full coverage." },
    //         image: "/services/15.jpg",
    //     },
    //     {
    //         title: { ar: "تصميم غرف السيرفرات", en: "Server Room Design" },
    //         description: { ar: "تجهيز بنية تحتية متكاملة لغرف السيرفرات.", en: "Complete infrastructure setup for server rooms." },
    //         image: "/services/16.jpg",
    //     },
    //     {
    //         title: { ar: "ترميم الواجهات المتضررة", en: "Facade Restoration" },
    //         description: {
    //             ar: "إصلاح وتجديد الواجهات التالفة بمظهر عصري.",
    //             en: "Repair and renewal of damaged facades with modern design.",
    //         },
    //         image: "/services/17.jpg",
    //     },
    //     {
    //         title: { ar: "تجديد التشطيبات الداخلية", en: "Interior Finishing Renewal" },
    //         description: { ar: "تحسين التشطيبات الداخلية لمظهر متجدد وأنيق.", en: "Refreshing interior finishes for a new, elegant look." },
    //         image: "/services/19.jpg",
    //     },
    // ];

    const services = [
        {
            id: 1,
            title: {
                ar: "اعمال الانشاءات الخرسانية",
                en: "Concrete construction works",
            },
            icon: <IconBackhoe size={40} />,
        },
        {
            id: 2,
            title: {
                ar: "اعمال التشطيبات الداخلية والخارجية",
                en: "Interior and exterior finishing works",
            },
            icon: <IconBuilding size={40} />,
        },
        {
            id: 3,
            title: {
                ar: "اعمال الهياكل الحديدية",
                en: "Steel structure works",
            },
            icon: <IconShield size={40} />,
        },
        {
            id: 4,
            title: {
                ar: "اعمال الانظمة و الشبكات",
                en: "Systems and networks works",
            },
            icon: <IconAccessPoint size={40} />,
        },
        {
            id: 5,
            title: {
                ar: "اعمال الترميمات الداخلية والخارجية",
                en: "Interior and exterior restoration works",
            },
            icon: <IconRestore size={40} />,
        },
        {
            id: 6,
            title: {
                ar: "اعمال الصيانة و التشغيل",
                en: "Maintenance and operation works",
            },
            icon: <IconTool size={40} />,
        },
    ];

    return (
        <Section className="relative bg-[url(/home/services.png)] bg-no-repeat bg-cover bg-center">
            <Container className="relative z-10">
                <SectionTitle variant="secondary">{t("Navigation.services")}</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-white">
                    {services.map((item, index) => (
                        <Link key={index} href={"/services/" + item.id}>
                            <div className="text-center flex flex-col items-center space-y-3">
                                {item.icon}
                                <p>{locale == "ar" ? item.title.ar : item.title.en}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
            <div className="absolute inset-0 bg-primary opacity-60"></div>
        </Section>
    );
};
