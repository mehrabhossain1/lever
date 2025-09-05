"use client";

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const PhotoGallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = useRef<number | null>(null);

  // Sample photos - replace with actual photos
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      alt: "Medical Conference 1",
      title: "BSLCTR Annual Conference 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Medical Conference 2", 
      title: "Hepatobiliary Surgery Workshop"
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Medical Conference 3",
      title: "Liver Disease Symposium"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      alt: "Medical Conference 4",
      title: "Advanced Hepatology Training"
    },
    {
      src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      alt: "Medical Conference 5",
      title: "International Medical Summit"
    }
  ];

  // Set up autoplay
  useEffect(() => {
    if (!api) return;

    // Start autoplay when component mounts
    intervalRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

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
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-sky-800 mb-4">Photo Gallery</h1>
        <p className="text-gray-600 text-lg">
          Capturing moments from our medical conferences and events
        </p>
      </div>

      <div 
        className="relative"
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
                <div className="relative group">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0" />
        </Carousel>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-sky-300 hover:bg-sky-500 transition-colors duration-200"
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;