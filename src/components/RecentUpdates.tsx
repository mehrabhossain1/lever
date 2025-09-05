"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const RecentUpdates = () => {
  // Sample news/updates data - replace with actual data
  const updates = [
    {
      id: 1,
      title: "BSLCTR Annual Conference 2024 Registration Now Open",
      excerpt: "Join us for the most comprehensive hepatobiliary surgery conference featuring world-renowned experts and cutting-edge research presentations.",
      date: "2024-01-15",
      time: "2 hours ago",
      category: "Conference",
      type: "announcement",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "New Guidelines for Liver Transplantation Released",
      excerpt: "Updated clinical guidelines for liver transplantation procedures based on latest research and international best practices.",
      date: "2024-01-14",
      time: "1 day ago",
      category: "Guidelines",
      type: "medical",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 3,
      title: "Hepatobiliary Surgery Workshop - February 2024",
      excerpt: "Hands-on training workshop for advanced hepatobiliary surgical techniques. Limited seats available for qualified surgeons.",
      date: "2024-01-13",
      time: "2 days ago",
      category: "Workshop",
      type: "training",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 4,
      title: "Research Grant Opportunities for Young Hepatologists",
      excerpt: "BSLCTR announces funding opportunities for innovative research projects in hepatobiliary medicine and surgery.",
      date: "2024-01-12",
      time: "3 days ago",
      category: "Research",
      type: "opportunity",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "International Collaboration with European Liver Society",
      excerpt: "BSLCTR partners with European Liver Society to enhance knowledge sharing and collaborative research initiatives.",
      date: "2024-01-11",
      time: "4 days ago",
      category: "Partnership",
      type: "collaboration",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop",
      readTime: "3 min read",
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Conference":
        return <Users className="h-4 w-4" />;
      case "Guidelines":
        return <Award className="h-4 w-4" />;
      case "Workshop":
        return <TrendingUp className="h-4 w-4" />;
      case "Research":
        return <TrendingUp className="h-4 w-4" />;
      case "Partnership":
        return <Users className="h-4 w-4" />;
      default:
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Conference":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Guidelines":
        return "bg-green-100 text-green-800 border-green-200";
      case "Workshop":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Research":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Partnership":
        return "bg-pink-100 text-pink-800 border-pink-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const featuredUpdate = updates.find(update => update.featured);
  const regularUpdates = updates.filter(update => !update.featured);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-800 mb-4">Recent Updates & News</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay informed with the latest developments in hepatobiliary medicine, upcoming events, and important announcements from BSLCTR.
        </p>
      </div>

      {/* Main Content - Building Message */}
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-sky-800 mb-4">We are building</h3>
          <p className="text-gray-600">
            This section is currently under development. Please check back soon for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
