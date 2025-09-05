"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, MapPin, Users } from "lucide-react";

const PhotoGallery = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Enhanced photos with more metadata
    const photos = [
        {
            src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
            alt: "Medical Conference 1",
            title: "BSLCTR Annual Conference 2024",
            date: "March 15, 2024",
            location: "Dhaka Medical College",
            attendees: "250+ Attendees",
        },
        {
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
            alt: "Medical Conference 2",
            title: "Hepatobiliary Surgery Workshop",
            date: "February 20, 2024",
            location: "Bangabandhu Sheikh Mujib Medical University",
            attendees: "180+ Surgeons",
        },
        {
            src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
            alt: "Medical Conference 3",
            title: "Liver Disease Symposium",
            date: "January 10, 2024",
            location: "National Institute of Liver Disease",
            attendees: "320+ Participants",
        },
        {
            src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
            alt: "Medical Conference 4",
            title: "Advanced Hepatology Training",
            date: "December 5, 2023",
            location: "Square Hospitals Ltd",
            attendees: "150+ Doctors",
        },
        {
            src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
            alt: "Medical Conference 5",
            title: "International Medical Summit",
            date: "November 18, 2023",
            location: "Pan Pacific Sonargaon",
            attendees: "500+ Delegates",
        },
    ];

    // Animation variants
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

    // Pause autoplay on hover
    const handleMouseEnter = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
    };

    // Resume autoplay on mouse leave
    const handleMouseLeave = () => {
        if (api) {
            intervalRef.current = window.setInterval(() => {
                api.scrollNext();
            }, 4000);
        }
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Deep Gradient Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-sky-800 via-slate-800 to-sky-900"
                    animate={{
                        background: [
                            "linear-gradient(135deg, #075985 0%, #1e293b 50%, #0c4a6e 100%)",
                            "linear-gradient(135deg, #0c4a6e 0%, #334155 50%, #075985 100%)",
                            "linear-gradient(135deg, #075985 0%, #1e293b 50%, #0c4a6e 100%)",
                        ],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Animated floating elements */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-sky-700/20 to-slate-700/20 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-slate-700/25 to-sky-700/25 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        x: [0, -25, 0],
                        y: [0, 15, 0],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <motion.div
                    className="text-center mb-12 lg:mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Status Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-700/30 to-slate-700/20 backdrop-blur-md text-white border border-sky-600/30 shadow-xl mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Camera className="w-4 h-4 text-sky-300" />
                        Medical Events Gallery
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="bg-gradient-to-r from-white via-sky-100 to-slate-100 bg-clip-text text-transparent">
                            Photo Gallery
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Capturing moments from our medical conferences,
                        workshops, and events that shape the future of
                        healthcare in Bangladesh
                    </motion.p>
                </motion.div>

                <motion.div
                    className="relative"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Carousel
                        setApi={setApi}
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {photos.map((photo, index) => (
                                <CarouselItem key={index} className="w-full">
                                    <motion.div
                                        className="relative group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                            <div className="relative">
                                                <img
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    className="w-full h-[500px] lg:h-[600px] object-cover transition-all duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                                            </div>

                                            {/* Enhanced content overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
                                                    <Badge className="bg-sky-600/80 text-white border-0 mb-3">
                                                        Event Gallery
                                                    </Badge>

                                                    <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 leading-tight">
                                                        {photo.title}
                                                    </h3>

                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-200">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4 text-sky-300" />
                                                            <span>
                                                                {photo.date}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="w-4 h-4 text-sky-300" />
                                                            <span className="truncate">
                                                                {photo.location}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Users className="w-4 h-4 text-sky-300" />
                                                            <span>
                                                                {
                                                                    photo.attendees
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Enhanced Navigation Buttons */}
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-300 hover:scale-110" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-300 hover:scale-110" />
                    </Carousel>

                    {/* Enhanced Dots Indicator */}
                    <motion.div
                        className="flex justify-center mt-8 space-x-3"
                        variants={fadeInUp}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        {photos.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                    current === index
                                        ? "bg-sky-400 shadow-lg shadow-sky-400/50 scale-110"
                                        : "bg-white/30 hover:bg-white/50"
                                }`}
                                onClick={() => api?.scrollTo(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`View photo ${index + 1}`}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PhotoGallery;
