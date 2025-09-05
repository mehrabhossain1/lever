/**
 * HeroSection Component
 *
 * A modern, responsive hero section with:
 * - Clean grid-based layout with proper spacing
 * - Professional background with medical theme
 * - Smooth animations and micro-interactions
 * - High contrast text for accessibility
 * - Responsive design for all screen sizes
 * - Production-ready code with TypeScript
 *
 * @author AI Assistant
 * @version 1.0.0
 */

"use client";
import { motion, useInView } from "framer-motion";
import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    Play,
    Sparkles,
    ArrowRight,
    Shield,
    Users,
    Award,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface HeroProps {
    headline: string;
    subheadline: string;
    ctaText: string;
}

// Animation variants for consistent motion design
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
    },
};

const HeroSection: React.FC<HeroProps> = ({
    headline = "Transform Your Healthcare Experience",
    subheadline = "Advanced solutions for modern medical practices, designed to improve patient outcomes and streamline clinical workflows.",
    ctaText = "Get Started",
}) => {
    // High-quality medical/healthcare images for the carousel
    const images = [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ];

    // Trust indicators data
    const trustIndicators = [
        {
            icon: Shield,
            label: "HIPAA Compliant",
            color: "text-sky-600 dark:text-sky-400",
        },
        {
            icon: Users,
            label: "10K+ Users",
            color: "text-emerald-600 dark:text-emerald-400",
        },
        {
            icon: Award,
            label: "Award Winning",
            color: "text-blue-600 dark:text-blue-400",
        },
    ];

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const intervalRef = useRef<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Set up autoplay and current slide tracking
    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        // Start autoplay when component mounts
        intervalRef.current = window.setInterval(() => {
            api.scrollNext();
        }, 4000); // Change slide every 4 seconds

        // Clean up interval when component unmounts
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [api]);

    // Keyboard navigation for carousel
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!api) return;

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                api.scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                api.scrollNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [api]);

    // Add the keyframes to the document head
    useEffect(() => {
        const gradientKeyframes = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = gradientKeyframes;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Deep Gradient Background with Animations */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Primary deep gradient background */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "linear-gradient(135deg, #075985 0%, #0c4a6e 25%, #164e63 50%, #155e75 75%, #0e7490 100%)",
                            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #1d4ed8 50%, #2563eb 75%, #075985 100%)",
                            "linear-gradient(135deg, #164e63 0%, #0c4a6e 25%, #075985 50%, #0369a1 75%, #0284c7 100%)",
                            "linear-gradient(135deg, #075985 0%, #0c4a6e 25%, #164e63 50%, #155e75 75%, #0e7490 100%)",
                        ],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Secondary animated gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-80"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 80%, rgba(7, 89, 133, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(12, 74, 110, 0.5) 0%, transparent 50%)",
                            "radial-gradient(circle at 40% 40%, rgba(22, 78, 99, 0.7) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(21, 94, 117, 0.6) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 80%, rgba(30, 58, 138, 0.6) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(29, 78, 216, 0.5) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 80%, rgba(7, 89, 133, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(12, 74, 110, 0.5) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Animated mesh gradient */}
                <motion.div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: `
                            radial-gradient(at 40% 20%, hsla(200,85%,25%,1) 0px, transparent 50%),
                            radial-gradient(at 80% 0%, hsla(205,85%,20%,1) 0px, transparent 50%),
                            radial-gradient(at 0% 50%, hsla(195,80%,30%,1) 0px, transparent 50%),
                            radial-gradient(at 80% 50%, hsla(210,80%,25%,1) 0px, transparent 50%),
                            radial-gradient(at 0% 100%, hsla(202,85%,22%,1) 0px, transparent 50%),
                            radial-gradient(at 80% 100%, hsla(198,80%,28%,1) 0px, transparent 50%),
                            radial-gradient(at 0% 0%, hsla(207,85%,26%,1) 0px, transparent 50%)
                        `,
                    }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Enhanced animated floating elements */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-800/40 to-sky-900/35 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1.1, 1],
                        rotate: [0, 180, 270, 360],
                        x: [0, 50, -20, 0],
                        y: [0, -30, 10, 0],
                        opacity: [0.4, 0.7, 0.5, 0.4],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-slate-800/45 to-sky-800/40 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.5, 1.2],
                        rotate: [360, 180, 90, 0],
                        x: [0, -40, 15, 0],
                        y: [0, 20, -15, 0],
                        opacity: [0.5, 0.8, 0.6, 0.5],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-sky-800/40 to-slate-800/35 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.6, 0.8, 1],
                        rotate: [0, -180, -270, -360],
                        x: [0, 30, -25, 0],
                        y: [0, -40, 20, 0],
                        opacity: [0.4, 0.9, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Additional smaller floating orbs for more depth */}
                <motion.div
                    className="absolute top-1/6 left-1/6 w-32 h-32 bg-gradient-to-r from-slate-700/60 to-sky-800/55 rounded-full filter blur-2xl"
                    animate={{
                        scale: [0.8, 1.2, 0.9, 0.8],
                        x: [0, 25, -15, 0],
                        y: [0, -20, 10, 0],
                        opacity: [0.4, 0.8, 0.5, 0.4],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-gradient-to-r from-sky-800/50 to-slate-800/45 rounded-full filter blur-2xl"
                    animate={{
                        scale: [1.1, 0.9, 1.3, 1.1],
                        x: [0, -20, 10, 0],
                        y: [0, 15, -25, 0],
                        opacity: [0.5, 0.9, 0.6, 0.5],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Dynamic pattern overlay with animation */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:50px_50px]"
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        backgroundSize: ["50px 50px", "60px 60px", "50px 50px"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Subtle noise texture for depth */}
                <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen py-12 sm:py-16 lg:py-20">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-8 lg:space-y-10"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/* Status Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-800/30 to-slate-800/20 backdrop-blur-md text-white border border-sky-700/40 shadow-xl"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(7,89,133,0.25)",
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-sky-300" />
                            New Features Available
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span
                                className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-[length:400%_400%] text-transparent bg-clip-text drop-shadow-2xl"
                                style={{
                                    animation: "",
                                    // animation:
                                    //     "gradientShift 6s ease-in-out infinite, pulse 2s ease-in-out infinite alternate",
                                    background:
                                        "linear-gradient(-45deg, #ffffff, #dbeafe, #cffafe, #e0f2fe, #ffffff)",
                                    backgroundSize: "400% 400%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {headline}
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-lg"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {subheadline}
                        </motion.p>

                        {/* Call-to-Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Button
                                    size="lg"
                                    className="group relative text-base sm:text-lg font-semibold bg-gradient-to-r from-sky-800 via-sky-700 to-slate-700 hover:from-sky-900 hover:via-sky-800 hover:to-slate-800 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-sky-800/25 transition-all duration-300 border-0 min-w-[160px] sm:min-w-[180px] backdrop-blur-sm"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {ctaText}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group text-base sm:text-lg font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/5 min-w-[160px] sm:min-w-[180px]"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Play className="w-5 h-5" />
                                        Learn More
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            className="pt-8 lg:pt-12"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-sm text-slate-300 mb-6 font-semibold uppercase tracking-wide">
                                Trusted by leading healthcare providers
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
                                {trustIndicators.map((indicator, index) => {
                                    const IconComponent = indicator.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer"
                                            whileHover={{
                                                scale: 1.02,
                                                y: -2,
                                                rotate: [0, -1, 1, 0],
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, y: 0 }
                                                    : { opacity: 0, y: 20 }
                                            }
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.8 + index * 0.1,
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <IconComponent
                                                className={`w-5 h-5 text-white`}
                                            />
                                            <span className="text-sm font-medium text-white">
                                                {indicator.label}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image Carousel */}
                    <motion.div
                        className="relative"
                        variants={scaleIn}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    >
                        <Card className="shadow-none border-none bg-transparent relative">
                            {/* Navigation buttons */}
                            <button
                                onClick={() => api?.scrollPrev()}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            </button>
                            <button
                                onClick={() => api?.scrollNext()}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            </button>

                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full max-w-lg mx-auto"
                                aria-label="Medical care showcase carousel"
                            >
                                <CarouselContent>
                                    {images.map((src, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-2">
                                                <motion.div
                                                    className="relative overflow-hidden rounded-3xl shadow-2xl"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                >
                                                    {isLoading && (
                                                        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-3xl flex items-center justify-center">
                                                            <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                                                        </div>
                                                    )}
                                                    <img
                                                        src={
                                                            src ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={`Medical care image ${
                                                            index + 1
                                                        }`}
                                                        className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover transition-all duration-700 hover:scale-110"
                                                        onLoad={() =>
                                                            setIsLoading(false)
                                                        }
                                                        loading="lazy"
                                                    />
                                                    {/* Image overlay for better text contrast */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>

                                                    {/* Floating content overlay */}
                                                    <div className="absolute bottom-6 left-6 right-6">
                                                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                                                Advanced
                                                                Healthcare
                                                                Solutions
                                                            </h3>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                Cutting-edge
                                                                technology for
                                                                modern medical
                                                                practices
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Enhanced carousel indicators */}
                                <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-3 py-2">
                                    {images.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                                current === index
                                                    ? "bg-sky-400 shadow-lg shadow-sky-400/50 scale-110"
                                                    : "bg-white/20 hover:bg-white/40"
                                            }`}
                                            onClick={() => api?.scrollTo(index)}
                                            aria-label={`Go to slide ${
                                                index + 1
                                            }`}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                    ))}
                                </div>
                            </Carousel>

                            {/* Floating decorative elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-12 h-12 bg-sky-800/30 rounded-full backdrop-blur-sm"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-8 h-8 bg-slate-800/30 rounded-full backdrop-blur-sm"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.7, 0.4, 0.7],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
