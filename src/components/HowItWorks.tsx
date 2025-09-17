import React from 'react';
import { Upload, Brain, Zap, BarChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12" />,
      title: "Share Your Farm Data",
      description: "Upload information about your land, crops, and farming practices through our simple mobile app."
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze your data along with weather, soil, and market information."
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Get Recommendations",
      description: "Receive personalized, actionable advice delivered directly to your phone in your local language."
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Track Progress",
      description: "Monitor your crop performance and see how our recommendations are improving your yields and profits."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How CropWise Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From farm data to smart recommendations in four simple steps. 
            Our platform makes advanced agricultural technology accessible to everyone.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow relative z-10">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-green-600">
                    {step.icon}
                  </div>
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;