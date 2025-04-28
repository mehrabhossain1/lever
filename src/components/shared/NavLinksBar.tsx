"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SubscribeModal from "../SubscribeModal";

const links = [
  { name: "Home", path: "/" },
  { name: "Video/Photo Gallery", path: "/gallery" },
  { name: "Guidelines", path: "/guidelines" },
  { name: "Case Presentations", path: "/cases" },
  { name: "BSLCTRcon", path: "/bslctrcon" },
  { name: "About US", path: "/about" },
  { name: "Donation", path: "/donate" },
  { name: "Subscribe", path: "/subscribe" },
];

const NavLinksBar = () => {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const handleLinkClick = (linkName: string) => {
    if (linkName === "Subscribe") {
      // Prevent navigation and show modal instead
      setShowSubscribeModal(true);
      return false;
    }
    return true;
  };

  return (
    <>
      <nav className="w-full bg-sky-500 shadow-sm">
        <div className="flex items-center justify-between divide-x divide-sky-300">
          {links.map((link, index) => {
            if (link.name === "Subscribe") {
              return (
                <div key={index} className="flex-grow">
                  <Button
                    variant="ghost"
                    className="rounded-none px-6 py-4 text-white hover:bg-sky-400 w-full text-sm font-medium"
                    onClick={() => setShowSubscribeModal(true)}
                  >
                    {link.name}
                  </Button>
                </div>
              );
            }

            return (
              <Link key={index} to={link.path} className="flex-grow">
                <Button
                  variant="ghost"
                  className="rounded-none px-6 py-4 text-white hover:bg-sky-400 w-full text-sm font-medium"
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
