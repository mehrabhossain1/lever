import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const dummyWebinars = [
    {
        id: 1,
        title: "Mastering React in 2025",
        date: "May 20, 2025",
        time: "6:00 PM - 7:00 PM",
        host: "Jane Doe",
    },
    {
        id: 2,
        title: "Intro to TypeScript & Beyond",
        date: "May 23, 2025",
        time: "3:00 PM - 4:00 PM",
        host: "John Smith",
    },
];

export default function LiveWebinars() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
                📺 Live Webinars
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
                {dummyWebinars.map((webinar, idx) => (
                    <motion.div
                        key={webinar.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <PlayCircle className="text-primary" />
                                    {webinar.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarDays className="w-4 h-4" />
                                    {webinar.date} • {webinar.time}
                                </div>
                                <p className="text-sm">
                                    Hosted by{" "}
                                    <span className="font-medium">
                                        {webinar.host}
                                    </span>
                                </p>
                                <Button variant="outline" className="w-full">
                                    Join Webinar
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
