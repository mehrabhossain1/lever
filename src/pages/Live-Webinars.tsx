"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Clock, Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define TypeScript interfaces
interface Speaker {
    name: string;
    role: string;
    avatar: string;
}

interface Webinar {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    category: string;
    thumbnail: string;
    speakers: Speaker[];
    attendees: number;
    isLive: boolean;
}

// Dummy data
const webinars: Webinar[] = [
    {
        id: "1",
        title: "Modern Frontend Development with React 19",
        description:
            "Learn about the latest features in React 19 and how to leverage them in your applications.",
        date: "May 15, 2025",
        time: "2:00 PM EST",
        duration: "60 min",
        category: "Development",
        thumbnail:
            "https://cdn4.vectorstock.com/i/1000x1000/50/38/online-webinar-or-seminar-with-cartoon-people-flat-vector-27725038.jpg",
        speakers: [
            {
                name: "Sarah Johnson",
                role: "Senior React Developer",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            {
                name: "Michael Chen",
                role: "UI/UX Specialist",
                avatar: "/placeholder.svg?height=40&width=40",
            },
        ],
        attendees: 1245,
        isLive: true,
    },
    // {
    //     id: "2",
    //     title: "Building Scalable APIs with Node.js",
    //     description:
    //         "Discover best practices for creating robust and scalable backend services with Node.js.",
    //     date: "May 17, 2025",
    //     time: "11:00 AM EST",
    //     duration: "90 min",
    //     category: "Backend",
    //     thumbnail:
    //         "https://cdn4.vectorstock.com/i/1000x1000/50/38/online-webinar-or-seminar-with-cartoon-people-flat-vector-27725038.jpg",
    //     speakers: [
    //         {
    //             name: "David Wilson",
    //             role: "Backend Architect",
    //             avatar: "/placeholder.svg?height=40&width=40",
    //         },
    //     ],
    //     attendees: 876,
    //     isLive: true,
    // },
    // {
    //     id: "3",
    //     title: "Mastering TypeScript: Advanced Types and Patterns",
    //     description:
    //         "Take your TypeScript skills to the next level with advanced type techniques and design patterns.",
    //     date: "May 20, 2025",
    //     time: "3:30 PM EST",
    //     duration: "75 min",
    //     category: "Development",
    //     thumbnail:
    //         "https://cdn4.vectorstock.com/i/1000x1000/50/38/online-webinar-or-seminar-with-cartoon-people-flat-vector-27725038.jpg",
    //     speakers: [
    //         {
    //             name: "Emily Rodriguez",
    //             role: "TypeScript Expert",
    //             avatar: "/placeholder.svg?height=40&width=40",
    //         },
    //     ],
    //     attendees: 932,
    //     isLive: true,
    // },
    // {
    //     id: "4",
    //     title: "Framer Motion: Creating Delightful Animations",
    //     description:
    //         "Learn how to create engaging user experiences with Framer Motion animations in React.",
    //     date: "May 22, 2025",
    //     time: "1:00 PM EST",
    //     duration: "60 min",
    //     category: "Design",
    //     thumbnail:
    //         "https://cdn4.vectorstock.com/i/1000x1000/50/38/online-webinar-or-seminar-with-cartoon-people-flat-vector-27725038.jpg",
    //     speakers: [
    //         {
    //             name: "Alex Turner",
    //             role: "Motion Designer",
    //             avatar: "/placeholder.svg?height=40&width=40",
    //         },
    //         {
    //             name: "Priya Patel",
    //             role: "Frontend Developer",
    //             avatar: "/placeholder.svg?height=40&width=40",
    //         },
    //     ],
    //     attendees: 654,
    //     isLive: false,
    // },
    // {
    //     id: "5",
    //     title: "Tailwind CSS and shadcn/ui: Building Beautiful UIs",
    //     description:
    //         "Discover how to combine Tailwind CSS and shadcn/ui to create stunning user interfaces quickly.",
    //     date: "May 25, 2025",
    //     time: "10:00 AM EST",
    //     duration: "90 min",
    //     category: "Design",
    //     thumbnail:
    //         "https://cdn4.vectorstock.com/i/1000x1000/50/38/online-webinar-or-seminar-with-cartoon-people-flat-vector-27725038.jpg",
    //     speakers: [
    //         {
    //             name: "James Lee",
    //             role: "UI Designer",
    //             avatar: "/placeholder.svg?height=40&width=40",
    //         },
    //     ],
    //     attendees: 1087,
    //     isLive: false,
    // },
    {
        id: "6",
        title: "State Management in 2025: Beyond Redux",
        description:
            "Explore modern state management solutions for React applications in 2025.",
        date: "May 28, 2025",
        time: "4:00 PM EST",
        duration: "75 min",
        category: "Development",
        thumbnail:
            "https://cdn4.vectorstock.com/i/1000x1000/50/38/online-webinar-or-seminar-with-cartoon-people-flat-vector-27725038.jpg",
        speakers: [
            {
                name: "Olivia Martinez",
                role: "React Consultant",
                avatar: "/placeholder.svg?height=40&width=40",
            },
        ],
        attendees: 789,
        isLive: false,
    },
];

export default function LiveWebinars() {
    const [filter, setFilter] = useState<"all" | "live" | "upcoming">("all");

    const filteredWebinars = webinars.filter((webinar) => {
        if (filter === "all") return true;
        if (filter === "live") return webinar.isLive;
        if (filter === "upcoming") return !webinar.isLive;
        return true;
    });

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Live Webinars
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Join our expert-led live webinars to enhance your skills and
                    stay updated with the latest industry trends.
                </p>
            </motion.div>

            <Tabs defaultValue="all" className="mb-8">
                <div className="flex justify-center">
                    <TabsList>
                        <TabsTrigger
                            value="all"
                            onClick={() => setFilter("all")}
                        >
                            All Webinars
                        </TabsTrigger>
                        <TabsTrigger
                            value="live"
                            onClick={() => setFilter("live")}
                        >
                            Live Now
                        </TabsTrigger>
                        <TabsTrigger
                            value="upcoming"
                            onClick={() => setFilter("upcoming")}
                        >
                            Upcoming
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="all" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWebinars.map((webinar, index) => (
                            <WebinarCard
                                key={webinar.id}
                                webinar={webinar}
                                index={index}
                            />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="live" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWebinars.map((webinar, index) => (
                            <WebinarCard
                                key={webinar.id}
                                webinar={webinar}
                                index={index}
                            />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="upcoming" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWebinars.map((webinar, index) => (
                            <WebinarCard
                                key={webinar.id}
                                webinar={webinar}
                                index={index}
                            />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

function WebinarCard({ webinar, index }: { webinar: Webinar; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                    <img
                        src={webinar.thumbnail || "/placeholder.svg"}
                        alt={webinar.title}
                        className="w-full h-48 object-cover"
                    />
                    {webinar.isLive && (
                        <div className="absolute top-3 left-3">
                            <Badge
                                variant="destructive"
                                className="flex items-center gap-1"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                LIVE NOW
                            </Badge>
                        </div>
                    )}
                    <div className="absolute top-3 right-3">
                        <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                        >
                            <Users className="h-3 w-3" />
                            {webinar.attendees.toLocaleString()}
                        </Badge>
                    </div>
                </div>

                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                        <Badge variant="outline">{webinar.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {webinar.duration}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mt-2 line-clamp-2">
                        {webinar.title}
                    </h3>
                </CardHeader>

                <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {webinar.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <CalendarIcon className="h-4 w-4" />
                        <span>
                            {webinar.date} • {webinar.time}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <div className="flex -space-x-2">
                            {webinar.speakers.map((speaker, i) => (
                                <Avatar
                                    key={i}
                                    className="border-2 border-background h-8 w-8"
                                >
                                    <AvatarImage
                                        src={
                                            speaker.avatar || "/placeholder.svg"
                                        }
                                        alt={speaker.name}
                                    />
                                    <AvatarFallback>
                                        {speaker.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                        <div className="text-sm">
                            {webinar.speakers.map((s) => s.name).join(", ")}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="pt-2">
                    <Button
                        className="w-full gap-2"
                        variant={webinar.isLive ? "destructive" : "default"}
                    >
                        {webinar.isLive ? "Join Now" : "Register"}
                        <ExternalLink className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
