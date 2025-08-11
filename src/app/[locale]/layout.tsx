import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { ThemeProvider } from "../../components/theme-provider";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebSite } from "schema-dts";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    const isArabic = locale === "ar";
    const t = await getTranslations({ locale });
    return (
        <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="canonical" href={`https://next-app-i18n-starter.vercel.app`} />
                <link rel="alternate" hrefLang="x-default" href="https://next-app-i18n-starter.vercel.app" />
                <link rel="alternate" hrefLang="en" href="https://next-app-i18n-starter.vercel.app/en" />
                <link rel="alternate" hrefLang="ar" href="https://next-app-i18n-starter.vercel.app/ar" />
                {/* <meta name="keywords" content={t("keywords")} /> */}
                <meta
                    name="keywords"
                    content="صروح الكبرى, شركة صروح الكبرى, Soroh AlKobra, شركة مقاولات, شركة مقاولات عامة, أفضل شركة مقاولات, شركات المقاولات الموثوقة, شركة إنشاءات, شركة بناء, شركات تشييد المباني"
                />
                <meta
                    name="description"
                    content="شركة صروح الكبرى للمقاولات تقدم أفضل خدمات البناء والتشييد بأعلى جودة واحترافية، مع خبرة واسعة في تنفيذ المشاريع العمرانية والصناعية."
                />
                <meta name="robots" content="index, follow" />
                <script
                    {...jsonLdScriptProps<WebSite>({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: t("Home.hero-title"),
                        description: t("Home.hero-title"),
                        url: "https://next-app-i18n-starter.vercel.app",
                        inLanguage: locale,
                    })}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <NextIntlClientProvider>{children}</NextIntlClientProvider>
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}

const locales = ["ar", "en"] as const;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    return {
        title: t("Home.hero-title"),
        description: t("Home.hero-title"),
        // keywords: t("keywords"),
        other: {
            "google-site-verification": "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
        },
        openGraph: {
            title: t("Home.hero-title"),
            description: t("Home.hero-title"),
            url: `https://next-app-i18n-starter.vercel.app`,
            siteName: "Next.js i18n Template",
            images: [
                {
                    url: "https://next-app-i18n-starter.vercel.app/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: t("Home.hero-title"),
                },
            ],
            locale: locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t("Home.hero-title"),
            description: t("Home.hero-title"),
            images: ["https://next-app-i18n-starter.vercel.app/og-image.png"],
            creator: "@s0ver5",
        },
        alternates: {
            canonical: `https://next-app-i18n-starter.vercel.app`,
            languages: {
                en: "https://next-app-i18n-starter.vercel.app/en",
                ar: "https://next-app-i18n-starter.vercel.app/ar",
                zh: "https://next-app-i18n-starter.vercel.app/zh",
                es: "https://next-app-i18n-starter.vercel.app/es",
                ja: "https://next-app-i18n-starter.vercel.app/jp",
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}
