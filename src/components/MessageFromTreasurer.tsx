"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    DollarSign,
    Shield,
    TrendingUp,
    CheckCircle,
    Banknote,
} from "lucide-react";

const MessageFromTreasurer = () => {
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

    const financialStats = [
        { icon: Shield, label: "Financial Transparency", value: "100%" },
        { icon: TrendingUp, label: "Growth Rate", value: "25%" },
        { icon: CheckCircle, label: "Audited Reports", value: "Annual" },
    ];

    return (
        <section ref={ref} className="relative overflow-hidden py-16 lg:py-24">
            {/* Deep background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-800 via-slate-800 to-sky-900">
                {/* Animated floating elements */}
                <motion.div
                    className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-white/5 to-sky-600/10 rounded-full mix-blend-screen filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-gradient-to-r from-sky-600/10 to-white/5 rounded-full mix-blend-screen filter blur-3xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        x: [0, 25, 0],
                        y: [0, -15, 0],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 27,
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white border border-white/30 shadow-xl mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Banknote className="w-4 h-4 text-sky-300" />
                        Financial Leadership
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">
                            Message from Treasurer
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Ensuring financial excellence and transparency in our
                        mission to advance healthcare
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Column - Photo */}
                            <motion.div
                                className="flex-1 lg:max-w-md relative"
                                variants={fadeInLeft}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="h-full min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face"
                                        alt="Dr. [Treasurer Name] - Treasurer, BSLCTR"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-800/20 via-transparent to-transparent"></div>

                                    {/* Floating financial badge */}
                                    <motion.div
                                        className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.9, 1, 0.9],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-6 h-6 text-sky-800" />
                                            <div className="text-left">
                                                <p className="text-xs text-slate-600">
                                                    Annual Budget
                                                </p>
                                                <p className="font-bold text-sky-800">
                                                    ৳50L+
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right Column - Text Content */}
                            <motion.div
                                className="flex-1 p-8 lg:p-12"
                                variants={fadeInRight}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <CardContent className="p-0">
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                                Dr. [Treasurer Name]
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <Badge className="bg-sky-600 text-white border-0">
                                                    Treasurer, BSLCTR
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="border-white/30 text-white"
                                                >
                                                    <Shield className="w-3 h-3 mr-1" />
                                                    Financial Steward
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="space-y-6 text-slate-200 leading-relaxed text-lg">
                                            <p className="relative pl-6 border-l-4 border-white/30">
                                                As the Treasurer of BSLCTR, I am
                                                committed to ensuring the
                                                financial stability and
                                                transparency of our society. Our
                                                financial resources are
                                                carefully managed to support our
                                                research initiatives,
                                                educational programs, and member
                                                services.
                                            </p>

                                            <p>
                                                We believe in responsible
                                                stewardship of funds, ensuring
                                                that every contribution from our
                                                members and sponsors is utilized
                                                effectively to advance
                                                hepatobiliary medicine and
                                                improve patient care outcomes.
                                            </p>

                                            <p className="font-medium text-sky-300">
                                                I am proud to be part of an
                                                organization that maintains the
                                                highest standards of financial
                                                integrity while supporting
                                                groundbreaking research and
                                                educational opportunities for
                                                our members.
                                            </p>
                                        </div>

                                        {/* Financial Stats */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                            {financialStats.map(
                                                (stat, index) => {
                                                    const IconComponent =
                                                        stat.icon;
                                                    return (
                                                        <motion.div
                                                            key={index}
                                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                                                            initial={{
                                                                opacity: 0,
                                                                y: 20,
                                                            }}
                                                            animate={
                                                                isInView
                                                                    ? {
                                                                          opacity: 1,
                                                                          y: 0,
                                                                      }
                                                                    : {
                                                                          opacity: 0,
                                                                          y: 20,
                                                                      }
                                                            }
                                                            transition={{
                                                                duration: 0.4,
                                                                delay:
                                                                    0.8 +
                                                                    index * 0.1,
                                                            }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                            }}
                                                        >
                                                            <IconComponent className="w-6 h-6 text-sky-300 mx-auto mb-2" />
                                                            <p className="text-xs text-slate-300 mb-1">
                                                                {stat.label}
                                                            </p>
                                                            <p className="font-bold text-white">
                                                                {stat.value}
                                                            </p>
                                                        </motion.div>
                                                    );
                                                }
                                            )}
                                        </div>

                                        <div className="pt-6 border-t border-white/20">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-white font-bold text-lg">
                                                        Dr. [Treasurer Name]
                                                    </p>
                                                    <p className="text-slate-300">
                                                        Treasurer, BSLCTR
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sky-300 text-sm font-medium">
                                                        Est. 2020
                                                    </p>
                                                    <p className="text-slate-300 text-xs">
                                                        Serving Excellence
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </motion.div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default MessageFromTreasurer;
