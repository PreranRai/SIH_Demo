import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')}
              <span className="text-green-600 block">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center group">
                {t('hero.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                {t('hero.watchDemo')}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Farmer using mobile technology" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hero.todayRecommendation')}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('hero.irrigation')}</span>
                    <span className="text-blue-600 font-medium">{t('hero.applyWater')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('hero.fertilizer')}</span>
                    <span className="text-green-600 font-medium">{t('hero.npkFertilizer')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('hero.weatherAlert')}</span>
                    <span className="text-amber-600 font-medium">{t('hero.rainExpected')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;