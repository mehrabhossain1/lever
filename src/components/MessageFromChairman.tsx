"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Award, Users, Heart } from "lucide-react";

const MessageFromChairman = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
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

    return (
        <section ref={ref} className="relative overflow-hidden py-16 lg:py-24">
            {/* Background with deep gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/30 to-white">
                {/* Animated floating elements */}
                <motion.div
                    className="absolute top-1/4 right-1/6 w-64 h-64 bg-gradient-to-r from-sky-800/10 to-slate-800/10 rounded-full mix-blend-multiply filter blur-3xl"
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
                    className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-gradient-to-r from-slate-800/10 to-sky-800/10 rounded-full mix-blend-multiply filter blur-3xl"
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 lg:mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-800/10 to-slate-800/5 backdrop-blur-sm text-sky-800 border border-sky-200 shadow-lg mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Award className="w-4 h-4 text-sky-600" />
                        Leadership Message
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="bg-gradient-to-r from-sky-800 via-slate-700 to-sky-800 bg-clip-text text-transparent">
                            Message from Chairman
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        A personal message from our esteemed chairman about our
                        mission and vision
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Column - Text Content */}
                            <motion.div
                                className="flex-1 p-8 lg:p-12"
                                variants={fadeInLeft}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <CardContent className="p-0">
                                    <div className="space-y-8">
                                        <div className="relative">
                                            <Quote className="absolute -top-4 -left-2 w-8 h-8 text-sky-800/20" />
                                            <div className="pl-6">
                                                <h3 className="text-2xl lg:text-3xl font-bold text-sky-800 mb-4">
                                                    Dr. [Chairman Name]
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    <Badge className="bg-sky-800 text-white border-0">
                                                        Chairman, BSLCTR
                                                    </Badge>
                                                    <Badge
                                                        variant="outline"
                                                        className="border-sky-200 text-sky-700"
                                                    >
                                                        <Heart className="w-3 h-3 mr-1" />
                                                        Medical Leader
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                                            <p className="relative pl-6 border-l-4 border-sky-800/20">
                                                Welcome to the Bangladesh
                                                Society of Liver,
                                                Cholangiocarcinoma and
                                                Transplant Research (BSLCTR). It
                                                is with great pleasure that I
                                                extend my warmest greetings to
                                                all members, healthcare
                                                professionals, and stakeholders
                                                in the field of hepatobiliary
                                                medicine.
                                            </p>

                                            <p>
                                                Our society is committed to
                                                advancing the understanding and
                                                treatment of liver diseases,
                                                cholangiocarcinoma, and
                                                transplantation. Through
                                                collaborative research,
                                                education, and clinical
                                                excellence, we strive to improve
                                                patient outcomes and contribute
                                                to the global knowledge base in
                                                hepatobiliary medicine.
                                            </p>

                                            <p className="font-medium text-sky-800">
                                                I invite you to join us in our
                                                mission to transform liver care
                                                in Bangladesh and beyond.
                                                Together, we can make a
                                                significant impact on the lives
                                                of patients and their families.
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-sky-100">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1">
                                                    <p className="text-sky-800 font-bold text-lg">
                                                        Dr. [Chairman Name]
                                                    </p>
                                                    <p className="text-slate-600">
                                                        Chairman, BSLCTR
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 text-sky-600">
                                                    <Users className="w-5 h-5" />
                                                    <span className="text-sm font-medium">
                                                        Leading 500+ Members
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </motion.div>

                            {/* Right Column - Photo */}
                            <motion.div
                                className="flex-1 lg:max-w-md relative"
                                variants={fadeInRight}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="h-full min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face"
                                        alt="Dr. [Chairman Name] - Chairman, BSLCTR"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sky-800/30 via-transparent to-transparent"></div>

                                    {/* Floating decorative elements */}
                                    <motion.div
                                        className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Award className="w-8 h-8 text-sky-800" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default MessageFromChairman;
