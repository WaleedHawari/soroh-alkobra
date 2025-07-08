"use client";

import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { ThemedButtton } from "@/components/ThemedButtton";
import { useLocale } from "next-intl";
import { twMerge } from "tailwind-merge";

interface SlideData {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageUrl: string;
}

export const Slider: React.FC<{ slides: SlideData[] }> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const locale = useLocale();

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length, isHovered]);

    return (
        <div
            className="relative w-full min-h-[80vh] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className={twMerge(locale == "ar" ? "right-20" : "left-20", "absolute bottom-1/2 translate-y-1/2 space-y-2")}>
                        <h1 className="text-primary text-lg sm:text-2xl md:text-5xl font-semibold">{slide.title}</h1>
                        <p className="text-base md:text-3xl text-white">{slide.subtitle}</p>
                        <Link href={slide.ctaLink} target="_blank">
                            <ThemedButtton variant="primary">{slide.ctaText}</ThemedButtton>
                        </Link>
                    </div>
                </div>
            ))}

            {slides.length > 0 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-black transition duration-200 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-20"
                    >
                        <IconChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-black transition duration-200 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-20"
                    >
                        <IconChevronRight size={24} />
                    </button>
                </>
            )}

            <div
                className={twMerge(
                    locale == "ar" && "flex-row-reverse",
                    "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20"
                )}
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
};
