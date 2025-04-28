/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroProps> = ({
  headline = "Transform Your Healthcare Experience",
  subheadline = "Advanced solutions for modern medical practices, designed to improve patient outcomes and streamline clinical workflows.",
  ctaText = "Get Started",
}) => {
  // Array of images for the carousel
  const images = [
    "https://img.freepik.com/premium-photo/glass-whiskey-half-full-glass-alcohol_1321053-599.jpg?w=996",
    "https://img.freepik.com/free-vector/late-stage-scarring-liver_1308-50368.jpg?t=st=1745867748~exp=1745871348~hmac=8e1fc14f5bf4a1790b252e4e2f92cbd9c8471fcc107a1b14e1d2e22a925549f4&w=996",
    "https://img.freepik.com/premium-photo/wooden-model-human-liver-doctors-hand-concept-healthcare_253401-5208.jpg?w=996",
  ];

  // State for active carousel item
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Set up autoplay
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Update current slide index when carousel changes
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);

    return () => {
      clearInterval(interval);
      api?.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>

        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 my-4">
              New Features Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              {headline}
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-md font-medium">
              {ctaText}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-md font-medium">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-6">
            <p className="text-sm text-muted-foreground mb-3">
              Trusted by leading healthcare providers
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-gray-200 rounded-md opacity-50"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image Carousel */}
        <div className="lg:w-1/2">
          <Card className="border-0 shadow-xl bg-transparent">
            <Carousel setApi={setApi} className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={src || "/placeholder.svg"}
                          alt={`Medical care image ${index + 1}`}
                          className="w-full h-[300px] sm:h-[400px] object-cover transition-all hover:scale-105 duration-500"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2 py-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      current === index ? "bg-primary w-8" : "bg-primary/30"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselPrevious className="hidden sm:flex -left-4" />
              <CarouselNext className="hidden sm:flex -right-4" />
            </Carousel>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
