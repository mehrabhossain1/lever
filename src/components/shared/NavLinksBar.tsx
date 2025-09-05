"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SubscribeModal from "../SubscribeModal";
import { Menu } from "lucide-react"; // for hamburger icon
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // shadcn sheet

const links = [
    { name: "Home", path: "/" },
    { name: "Live Webinars", path: "/live-webinars" },
    { name: "All Hepatologist, Hepatobiliary Surgeon, Interventiona list", path: "/hepatologist-surgeon-interventiona" },
    { name: "Guidelines", path: "/guidelines" },
    { name: "Video/Photo Gallery", path: "/gallery" },
    { name: "Case Presentations", path: "/cases" },
    { name: "BSLCTRcon", path: "/bslctrcon" },
    { name: "About US", path: "/about" },
    { name: "Donation", path: "/donate" },
    { name: "Subscribe", path: "/subscribe" },
];

const NavLinksBar = () => {
    const [showSubscribeModal, setShowSubscribeModal] = useState(false);
    const location = useLocation(); // Get the current location

    const handleLinkClick = (linkName: string) => {
        if (linkName === "Subscribe") {
            setShowSubscribeModal(true);
            return false;
        }
        return true;
    };

    return (
        <>
            <nav className="w-full bg-sky-800 shadow-sm sticky top-0 z-50">
                <div className="flex items-center justify-between px-4 py-3 md:hidden">
                    {/* Mobile: Hamburger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="bg-sky-500 text-white border-none"
                        >
                            <div className="flex flex-col gap-4 mt-8">
                                {links.map((link, index) => {
                                    if (link.name === "Subscribe") {
                                        return (
                                            <Button
                                                key={index}
                                                variant="ghost"
                                                className="w-full justify-start text-white"
                                                onClick={() =>
                                                    setShowSubscribeModal(true)
                                                }
                                            >
                                                {link.name}
                                            </Button>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            onClick={() =>
                                                handleLinkClick(link.name)
                                            }
                                        >
                                            <Button
                                                variant="ghost"
                                                className={`w-full justify-start text-white ${
                                                    location.pathname ===
                                                    link.path
                                                        ? "bg-sky-400"
                                                        : ""
                                                }`}
                                            >
                                                {link.name}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Logo */}
                    <div className="text-white font-bold text-xl">BSLCTR</div>
                </div>

                {/* Desktop: Full Nav */}
                <div className="hidden md:flex items-center justify-between divide-x divide-sky-300 bg-sky-800 py-2 px-4">
                    {links.map((link, index) => {
                        if (link.name === "Subscribe") {
                            return (
                                <div key={index} className="flex-grow">
                                    <Button
                                        variant="ghost"
                                        className={`rounded-none px-6 py-4 text-white hover:bg-sky-400 hover:text-white w-full text-sm font-medium ${
                                            location.pathname === link.path
                                                ? "bg-sky-400"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setShowSubscribeModal(true)
                                        }
                                    >
                                        {link.name}
                                    </Button>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                to={link.path}
                                className="flex-grow"
                            >
                                <Button
                                    variant="ghost"
                                    className={`rounded-none px-6 py-4 text-white hover:bg-sky-400 hover:text-white w-full text-sm font-medium ${
                                        location.pathname === link.path
                                            ? "bg-sky-400 "
                                            : ""
                                    }`}
                                    onClick={() => handleLinkClick(link.name)}
                                >
                                    {link.name}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <SubscribeModal
                isOpen={showSubscribeModal}
                onClose={() => setShowSubscribeModal(false)}
            />
        </>
    );
};

export default NavLinksBar;
