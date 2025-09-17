import React from 'react';
import { TrendingUp, Droplet, DollarSign, Users } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "35%",
      label: "Average Yield Increase",
      description: "Farmers see significant improvements in crop productivity"
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      number: "40%",
      label: "Water Savings",
      description: "Reduced water consumption through precision irrigation"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      number: "₹15,000",
      label: "Average Annual Savings",
      description: "Cost reduction through optimized input usage"
    },
    {
      icon: <Users className="h-8 w-8" />,
      label: "50,000+",
      number: "Happy Farmers",
      description: "Growing community of successful farmers using CropWise"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Maharashtra",
      image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "CropWise helped me increase my cotton yield by 30% while reducing fertilizer costs. The weather alerts saved my crops twice this season!"
    },
    {
      name: "Priya Devi",
      location: "Punjab",
      image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "The pest alert system is amazing. I got early warning about aphids and treated my wheat field just in time. My neighbors are now using CropWise too."
    }
  ];

  return (
    <section id="impact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CropWise is transforming the lives of small and marginal farmers 
            across the country with measurable improvements in productivity and profitability.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="text-green-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-green-600">{testimonial.location}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;