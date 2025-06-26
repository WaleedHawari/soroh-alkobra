import NotFound from "@/app/[locale]/not-found";
import { Layout } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import { PageTitle } from "@/components/PageTitle";
import { Service } from "@/components/Service";
import { useLocale } from "next-intl";

interface Props {
    id: string;
}

export const ServicePage = ({ id }: Props) => {
    const locale = useLocale();

    const services = [
        {
            title: {
                ar: "اعمال الانشاءات الخرسانية",
                en: "Concrete Construction Works",
            },
            items: [
                {
                    title: {
                        ar: "صب الأساسات الخرسانية",
                        en: "Concrete Foundation Pouring",
                    },
                    description: {
                        ar: "تنفيذ القواعد والأساسات بدقة لضمان المتانة والثبات.",
                        en: "Accurate execution of foundations to ensure strength and stability.",
                    },
                    image: "/services/1.jpg",
                },
                {
                    title: {
                        ar: "إعداد القوالب والشدات الخشبية",
                        en: "Formwork and Shuttering",
                    },
                    description: {
                        ar: "تصميم وتجهيز الشدات حسب الأبعاد الهندسية بدقة.",
                        en: "Design and preparation of formwork with precise measurements.",
                    },
                    image: "/services/2.jpg",
                },
                {
                    title: {
                        ar: "الخرسانة الجاهزة والموقعية",
                        en: "Ready-Mix and On-Site Concrete",
                    },
                    description: {
                        ar: "توريد وصب الخرسانة وفقاً لمتطلبات المشروع.",
                        en: "Supplying and pouring concrete based on project needs.",
                    },
                    image: "/services/3.jpg",
                },
                {
                    title: {
                        ar: "بناء الأعمدة والجدران الحاملة",
                        en: "Structural Columns and Walls",
                    },
                    description: {
                        ar: "تنفيذ أعمدة وجدران حاملة قوية لضمان دعم الهيكل.",
                        en: "Execution of strong load-bearing columns and walls.",
                    },
                    image: "/services/4.jpg",
                },
            ],
            id: 1,
            description: {
                ar: "تتميز شركتنا في أعمال الإنشاءات الخرسانية، بتقديم حلول متكاملة عالية الجودة لتنفيذ مشاريع البناء بأفضل المعايير. بفضل خبرتنا وكفاءتنا، نضمن لعملائنا تنفيذًا دقيقًا ومستدامًا يتوافق مع أعلى المواصفات الفنية، بدءًا من الأساسات إلى الهياكل الخرسانية المتكاملة. التزامنا بالجودة والابتكار يجعلنا الخيار الأمثل لكل مشروع بناء.",
                en: "Our company specializes in concrete construction works, offering integrated high-quality solutions for construction projects according to the best standards. With our experience and expertise, we ensure accurate and sustainable execution from foundations to complete concrete structures. Our commitment to quality and innovation makes us the ideal choice for every construction project.",
            },
        },
        {
            title: {
                ar: "اعمال التشطيبات الداخلية والخارجية",
                en: "Interior & Exterior Finishing Works",
            },
            items: [
                {
                    title: {
                        ar: "دهانات وزخرفة داخلية",
                        en: "Interior Painting and Decoration",
                    },
                    description: {
                        ar: "تنفيذ تشطيبات جمالية عصرية للمساحات الداخلية.",
                        en: "Stylish and aesthetic finishes for interior spaces.",
                    },
                    image: "/services/5.jpeg",
                },
                {
                    title: {
                        ar: "تركيب الأرضيات",
                        en: "Floor Installation",
                    },
                    description: {
                        ar: "تنفيذ أرضيات سيراميك وباركيه ورخام بجودة عالية.",
                        en: "High-quality ceramic, parquet, and marble flooring.",
                    },
                    image: "/services/6.jpg",
                },
                {
                    title: {
                        ar: "تشطيبات الواجهات الخارجية",
                        en: "Exterior Facade Finishing",
                    },
                    description: {
                        ar: "تشطيبات مقاومة للظروف الجوية ومظهر جذاب.",
                        en: "Weather-resistant and visually appealing facade work.",
                    },
                    image: "/services/7.jpg",
                },
                {
                    title: {
                        ar: "الأسقف المستعارة والجبسية",
                        en: "Gypsum suspended ceilings",
                    },
                    description: {
                        ar: "تصاميم سقفية حديثة مع إنارة مدمجة.",
                        en: "Modern ceiling designs with integrated lighting.",
                    },
                    image: "/services/8.jpg",
                },
            ],
            id: 2,
            description: {
                ar: "نحن شركة متخصصة في أعمال التشطيبات الداخلية والخارجية، نقدم حلولًا متكاملة تجمع بين الجودة العالية والتصميم العصري. نحرص على تنفيذ التشطيبات بدقة وفقًا لأرقى المعايير لضمان مظهر راقٍ ومستدام للمباني، بدءًا من الديكورات الداخلية إلى الواجهات الخارجية. التزامنا بالاحترافية والإبداع يجعلنا الخيار الأفضل لتحقيق رؤية عملائنا بكل تفاصيلها.",
                en: "We are a company specialized in interior and exterior finishing works, offering integrated solutions that combine high quality with modern design. We execute finishes with precision according to top standards to ensure an elegant and lasting look for buildings. Our commitment to professionalism and creativity makes us the best choice to realize our clients' vision in every detail.",
            },
        },
        {
            title: {
                ar: "اعمال الهياكل الحديدية",
                en: "Steel Structure Works",
            },
            items: [
                {
                    title: {
                        ar: "تصميم الهياكل المعدنية",
                        en: "Steel Structure Design",
                    },
                    description: {
                        ar: "تصميمات هندسية دقيقة تلبي أعلى معايير الأمان.",
                        en: "Accurate engineering designs meeting safety standards.",
                    },
                    image: "/services/9.png",
                },
                {
                    title: {
                        ar: "تركيب المستودعات والهناجر",
                        en: "Warehouse and Hangar Installation",
                    },
                    description: {
                        ar: "تركيب منشآت حديدية قوية باستخدام مواد عالية الجودة.",
                        en: "Installing robust steel structures with top-grade materials.",
                    },
                    image: "/services/10.jpg",
                },
                // {
                //     title: {
                //         ar: "تجميع وتركيب الجسور الحديدية",
                //         en: "Steel Bridge Assembly",
                //     },
                //     description: {
                //         ar: "تصنيع وتجميع جسور للممرات الصناعية والمشاة.",
                //         en: "Fabrication and assembly of bridges for industrial use.",
                //     },
                //     image: "/services/11.jpg",
                // },
                {
                    title: {
                        ar: "صيانة وتقوية الهياكل القائمة",
                        en: "Structure Maintenance and Reinforcement",
                    },
                    description: {
                        ar: "فحص وتقوية الهياكل الحديدية لضمان الاستدامة.",
                        en: "Inspection and reinforcement for long-term durability.",
                    },
                    image: "/services/12.jpg",
                },
            ],
            id: 3,
            description: {
                ar: "نحن متخصصون في تصميم وتنفيذ الهياكل الحديدية بمواصفات دقيقة تلبي أعلى معايير الجودة والصلابة. نقدم حلولًا متكاملة ومبتكرة تلائم مختلف المشاريع الصناعية والتجارية، مع التركيز على الكفاءة والمتانة لضمان استدامة الإنشاءات. التزامنا بالدقة والاحترافية يجعلنا الخيار الأمثل لكل من يبحث عن هياكل حديدية قوية وموثوقة",
                en: "We specialize in designing and executing steel structures with precise specifications that meet the highest standards of quality and strength. We offer integrated and innovative solutions suitable for various industrial and commercial projects, focusing on efficiency and durability for long-lasting construction. Our accuracy and professionalism make us the ideal choice for those seeking strong and reliable steel structures.",
            },
        },
        {
            title: {
                ar: "اعمال الانظمة و الشبكات",
                en: "Systems and Networks Works",
            },
            items: [
                {
                    title: {
                        ar: "تمديد شبكات الفايبر الضوئي",
                        en: "Fiber Optic Network Installation",
                    },
                    description: {
                        ar: "شبكات إنترنت عالية السرعة بأحدث التقنيات.",
                        en: "High-speed fiber optic internet networks.",
                    },
                    image: "/services/13.jpg",
                },
                {
                    title: {
                        ar: "أنظمة المراقبة والتحكم",
                        en: "Surveillance and Control Systems",
                    },
                    description: {
                        ar: "تركيب كاميرات ومراقبة ذكية لضمان الأمان.",
                        en: "Smart surveillance camera installation for safety.",
                    },
                    image: "/services/14.jpg",
                },
                {
                    title: {
                        ar: "تركيب نقاط الشبكة الداخلية",
                        en: "Internal Network Points Setup",
                    },
                    description: {
                        ar: "توزيع نقاط الإنترنت لضمان تغطية مثالية.",
                        en: "Internal internet point setup for full coverage.",
                    },
                    image: "/services/15.jpg",
                },
                {
                    title: {
                        ar: "تصميم غرف السيرفرات",
                        en: "Server Room Design",
                    },
                    description: {
                        ar: "تجهيز بنية تحتية متكاملة لغرف السيرفرات.",
                        en: "Complete infrastructure setup for server rooms.",
                    },
                    image: "/services/16.jpg",
                },
            ],
            id: 4,
            description: {
                ar: "نحن متخصصون في تصميم وتنفيذ أنظمة الاتصالات والشبكات والفايبر، مقدمين حلولًا تقنية متطورة تضمن الكفاءة والموثوقية. نحرص على تلبية احتياجات المؤسسات والمشاريع من خلال بنية تحتية قوية وآمنة، تدعم الاتصال السريع ونقل البيانات بسلاسة. التزامنا بالدقة والجودة يجعلنا الخيار الأمثل لكل من يبحث عن حلول شبكية متقدمة تواكب التطورات التقنية.",
                en: "We specialize in designing and implementing communication systems, networks, and fiber optics, providing advanced technical solutions that ensure efficiency and reliability. We meet the needs of institutions and projects through strong and secure infrastructure that supports fast connectivity and smooth data transmission. Our precision and quality make us the best choice for advanced networking solutions that keep up with technology.",
            },
        },
        {
            title: {
                ar: "اعمال الترميمات الداخلية والخارجية",
                en: "Renovation & Restoration Works",
            },
            items: [
                {
                    title: {
                        ar: "ترميم الواجهات المتضررة",
                        en: "Facade Restoration",
                    },
                    description: {
                        ar: "إصلاح وتجديد الواجهات التالفة بمظهر عصري.",
                        en: "Repair and renewal of damaged facades with modern design.",
                    },
                    image: "/services/17.jpg",
                },
                {
                    title: {
                        ar: "معالجة الشروخ الهيكلية",
                        en: "Structural Crack Repair",
                    },
                    description: {
                        ar: "معالجة دقيقة للشروخ لضمان سلامة المبنى.",
                        en: "Precise crack repair to ensure building safety.",
                    },
                    image: "/services/18.jpg",
                },
                {
                    title: {
                        ar: "تجديد التشطيبات الداخلية",
                        en: "Interior Finishing Renewal",
                    },
                    description: {
                        ar: "تحسين التشطيبات الداخلية لمظهر متجدد وأنيق.",
                        en: "Refreshing interior finishes for a new, elegant look.",
                    },
                    image: "/services/19.jpg",
                },
                {
                    title: {
                        ar: "تحسين العزل الحراري والصوتي",
                        en: "Thermal & Acoustic Insulation",
                    },
                    description: {
                        ar: "تركيب حلول عزل فعالة للراحة والكفاءة.",
                        en: "Efficient insulation for comfort and performance.",
                    },
                    image: "/services/20.jpg",
                },
            ],
            id: 5,
            description: {
                ar: "نحن متخصصون في أعمال الترميم والتجديد للمباني الإدارية والتجارية والسكنية، حيث نقدم حلولًا متكاملة تعيد للمباني رونقها وجودتها وفق أعلى المعايير. نحرص على تنفيذ الترميمات بدقة واحترافية لضمان تحسين الهيكل العام وتعزيز كفاءة المساحات، مع مراعاة الجوانب الجمالية والوظيفية. التزامنا بالجودة والإبداع يجعلنا الخيار الأمثل لكل من يسعى إلى تجديد ممتلكاته بأسلوب راقٍ ومستدام",
                en: "We specialize in renovation and restoration of administrative, commercial, and residential buildings, offering comprehensive solutions to restore the beauty and quality of structures according to the highest standards. We execute renovations with precision and professionalism to enhance structural integrity and spatial efficiency, considering both aesthetics and functionality. Our commitment to quality and creativity makes us the best choice for elegant and sustainable property renewal.",
            },
        },
        {
            title: {
                ar: "اعمال الصيانة و التشغيل",
                en: "Maintenance & Operation Works",
            },
            items: [
                {
                    title: {
                        ar: "صيانة الأنظمة الكهربائية",
                        en: "Electrical System Maintenance",
                    },
                    description: {
                        ar: "فحص وصيانة دورية للأنظمة الكهربائية لضمان السلامة والكفاءة.",
                        en: "Routine inspection and maintenance of electrical systems to ensure safety and efficiency.",
                    },
                    image: "/services/21.jpg",
                },
                {
                    title: {
                        ar: "تشغيل أنظمة التكييف والتهوية",
                        en: "HVAC Operation",
                    },
                    description: {
                        ar: "تشغيل وصيانة وحدات التكييف والتهوية لتحسين بيئة العمل.",
                        en: "Operating and maintaining HVAC units to enhance indoor conditions.",
                    },
                    image: "/services/22.jpg",
                },
                {
                    title: {
                        ar: "صيانة السباكة والمياه",
                        en: "Plumbing and Water Maintenance",
                    },
                    description: {
                        ar: "إصلاح الأعطال وتسربات المياه للحفاظ على كفاءة النظام.",
                        en: "Fixing malfunctions and leaks to maintain plumbing efficiency.",
                    },
                    image: "/services/23.jpeg",
                },
                {
                    title: {
                        ar: "إدارة وتشغيل مرافق المباني",
                        en: "Building Facilities Operation",
                    },
                    description: {
                        ar: "تشغيل يومي شامل لجميع مرافق المبنى لضمان التشغيل السلس.",
                        en: "Comprehensive daily operation of all building facilities for smooth functioning.",
                    },
                    image: "/services/24.jpeg",
                },
            ],
            id: 6,
            description: {
                ar: "نقدم خدمات متكاملة في مجال الصيانة والتشغيل تشمل الأنظمة الكهربائية والصحية، بهدف ضمان استمرارية الأداء وكفاءة البنية التحتية. نلتزم بأعلى معايير الجودة والسلامة في عمليات الفحص والتشغيل والصيانة، مما يساعد عملائنا على الحفاظ على ممتلكاتهم وتشغيل منشآتهم بكفاءة عالية وبدون توقف.",
                en: "We offer integrated maintenance and operation services covering electrical, and plumbing systems, aiming to ensure continuous performance and infrastructure efficiency. We adhere to the highest standards of quality and safety in inspection, operation, and maintenance processes, helping our clients maintain their assets and operate their facilities reliably and efficiently.",
            },
        },
    ];

    const service = services.find((item) => item.id == Number(id));

    if (!service) return <NotFound />;

    return (
        <Layout>
            <PageTitle>{locale == "ar" ? service.title.ar : service.title.en}</PageTitle>
            <Container className="pt-14 pb-24 space-y-8">
                <p>{locale == "ar" ? service.description.ar : service.description.en}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
                    {service.items.map((e, index) => (
                        <Service
                            key={index}
                            title={locale == "ar" ? e.title.ar : e.title.en}
                            description={locale == "ar" ? e.description.ar : e.description.en}
                            image={e.image}
                        />
                    ))}
                </div>
            </Container>
        </Layout>
    );
};
