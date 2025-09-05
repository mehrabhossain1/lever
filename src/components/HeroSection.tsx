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
import { Play, Sparkles, ArrowRight, Shield, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";

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
        y: 0
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1
    }
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
        { icon: Shield, label: "HIPAA Compliant", color: "text-sky-600 dark:text-sky-400" },
        { icon: Users, label: "10K+ Users", color: "text-emerald-600 dark:text-emerald-400" },
        { icon: Award, label: "Award Winning", color: "text-blue-600 dark:text-blue-400" },
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

            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                api.scrollPrev();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                api.scrollNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [api]);

    return (
        <section 
            ref={ref} 
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Professional Background with Medical Theme */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50 dark:from-slate-900 dark:via-slate-800/40 dark:to-slate-900"></div>

                {/* Background image with overlay for readability */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                        filter: "blur(1px)"
                    }}
                ></div>

                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 via-transparent to-blue-600/5 dark:from-sky-500/10 dark:via-transparent dark:to-blue-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40 dark:via-slate-800/20 dark:to-slate-900/40"></div>

                {/* Animated floating elements for visual interest */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-sky-400/15 to-blue-400/15 dark:from-sky-500/20 dark:to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        x: [0, -25, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        rotate: [0, -180, -360],
                        x: [0, 20, 0],
                        y: [0, -25, 0],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[size:40px_40px] opacity-30"></div>
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/50 dark:to-blue-900/50 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-700/60 shadow-sm backdrop-blur-sm"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                            New Features Available
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                            variants={fadeInUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 dark:from-slate-100 dark:via-sky-300 dark:to-slate-100 bg-[length:200%_200%] animate-gradient text-transparent bg-clip-text">
                                {headline}
                            </span>
                        </motion.h1>
                        
                        {/* Subheadline */}
                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
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
                                    className="group relative text-base sm:text-lg font-semibold bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 dark:from-sky-500 dark:to-blue-600 dark:hover:from-sky-600 dark:hover:to-blue-700 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 min-w-[160px] sm:min-w-[180px]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {ctaText}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 dark:from-sky-500 dark:to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
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
                                    className="group text-base sm:text-lg font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 dark:border-slate-600 hover:border-sky-500 dark:hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 min-w-[160px] sm:min-w-[180px]"
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
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-semibold uppercase tracking-wide">
                                Trusted by leading healthcare providers
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
                                {trustIndicators.map((indicator, index) => {
                                    const IconComponent = indicator.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-3 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                                            whileHover={{ scale: 1.02, y: -2, rotate: [0, -1, 1, 0] }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.4, delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                                        >
                                            <IconComponent className={`w-5 h-5 ${indicator.color}`} />
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{indicator.label}</span>
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
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
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
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {isLoading && (
                                                        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-3xl flex items-center justify-center">
                                                            <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                                                        </div>
                                                    )}
                                                    <img
                                                        src={src || "/placeholder.svg"}
                                                        alt={`Medical care image ${index + 1}`}
                                                        className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover transition-all duration-700 hover:scale-110"
                                                        onLoad={() => setIsLoading(false)}
                                                        loading="lazy"
                                                    />
                                                    {/* Image overlay for better text contrast */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>

                                                    {/* Floating content overlay */}
                                                    <div className="absolute bottom-6 left-6 right-6">
                                                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                                                Advanced Healthcare Solutions
                                                            </h3>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                Cutting-edge technology for modern medical practices
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
                                                    ? 'bg-sky-600 dark:bg-sky-500 shadow-lg shadow-sky-600/50 scale-110'
                                                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                                            }`}
                                            onClick={() => api?.scrollTo(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                    ))}
                                </div>
                            </Carousel>
                            
                            {/* Floating decorative elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-12 h-12 bg-sky-500/20 dark:bg-sky-400/30 rounded-full backdrop-blur-sm"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-500/20 dark:bg-blue-400/30 rounded-full backdrop-blur-sm"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.6, 0.3, 0.6],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
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
