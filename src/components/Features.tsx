import React from 'react';
import { 
  CloudRain, 
  Droplet, 
  Bug, 
  TrendingUp, 
  MapPin, 
  Smartphone 
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: t('features.weatherSmart'),
      description: t('features.weatherDesc')
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: t('features.precisionIrrigation'),
      description: t('features.irrigationDesc')
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: t('features.pestAlert'),
      description: t('features.pestDesc')
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('features.marketIntelligence'),
      description: t('features.marketDesc')
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: t('features.locationInsights'),
      description: t('features.locationDesc')
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('features.mobileFirst'),
      description: t('features.mobileDesc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;