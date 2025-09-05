"use client";

import { Card, CardContent } from "@/components/ui/card";

const MessageFromTreasurer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-800 mb-4">Message from Treasurer</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A message from our dedicated treasurer
        </p>
      </div>

      {/* Main Content - 2 Column Layout */}
      <Card className="overflow-hidden shadow-lg border-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Photo */}
          <div className="flex-1 lg:max-w-md">
            <div className="h-full min-h-[400px] lg:min-h-[500px] relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face"
                alt="Dr. [Treasurer Name] - Treasurer, BSLCTR"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="flex-1 p-8 lg:p-12">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-sky-800 mb-4">
                    Dr. [Treasurer Name]
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">
                    Treasurer, BSLCTR
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    As the Treasurer of BSLCTR, I am committed to ensuring the financial stability and 
                    transparency of our society. Our financial resources are carefully managed to support 
                    our research initiatives, educational programs, and member services.
                  </p>
                  
                  <p>
                    We believe in responsible stewardship of funds, ensuring that every contribution 
                    from our members and sponsors is utilized effectively to advance hepatobiliary 
                    medicine and improve patient care outcomes.
                  </p>
                  
                  <p>
                    I am proud to be part of an organization that maintains the highest standards of 
                    financial integrity while supporting groundbreaking research and educational 
                    opportunities for our members.
                  </p>
                </div>
                
                <div className="pt-4">
                  <p className="text-sky-600 font-semibold">
                    Dr. [Treasurer Name]<br />
                    Treasurer, BSLCTR
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessageFromTreasurer;
