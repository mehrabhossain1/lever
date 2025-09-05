"use client";

import { Card, CardContent } from "@/components/ui/card";

const MessageFromChairman = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-800 mb-4">Message from Chairman</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A personal message from our esteemed chairman
        </p>
      </div>

      {/* Main Content - 2 Column Layout */}
      <Card className="overflow-hidden shadow-lg border-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Text Content */}
          <div className="flex-1 p-8 lg:p-12">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-sky-800 mb-4">
                    Dr. [Chairman Name]
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">
                    Chairman, BSLCTR
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to the Bangladesh Society of Liver, Cholangiocarcinoma and Transplant Research (BSLCTR). 
                    It is with great pleasure that I extend my warmest greetings to all members, healthcare professionals, 
                    and stakeholders in the field of hepatobiliary medicine.
                  </p>
                  
                  <p>
                    Our society is committed to advancing the understanding and treatment of liver diseases, 
                    cholangiocarcinoma, and transplantation. Through collaborative research, education, and 
                    clinical excellence, we strive to improve patient outcomes and contribute to the global 
                    knowledge base in hepatobiliary medicine.
                  </p>
                  
                  <p>
                    I invite you to join us in our mission to transform liver care in Bangladesh and beyond. 
                    Together, we can make a significant impact on the lives of patients and their families.
                  </p>
                </div>
                
                <div className="pt-4">
                  <p className="text-sky-600 font-semibold">
                    Dr. [Chairman Name]<br />
                    Chairman, BSLCTR
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
          
          {/* Right Column - Photo */}
          <div className="flex-1 lg:max-w-md">
            <div className="h-full min-h-[400px] lg:min-h-[500px] relative">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face"
                alt="Dr. [Chairman Name] - Chairman, BSLCTR"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessageFromChairman;
