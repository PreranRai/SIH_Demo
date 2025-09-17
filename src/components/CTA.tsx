import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center group">
                {t('cta.startTrial')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                {t('cta.downloadBrochure')}
              </button>
            </div>
            <div className="text-sm text-gray-400">
              {t('cta.freeTrialNote')}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">{t('cta.getInTouch')}</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-green-500" />
                <div>
                  <div className="font-semibold">{t('cta.callUs')}</div>
                  <div className="text-gray-300">+91 9876 543 210</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-green-500" />
                <div>
                  <div className="font-semibold">{t('cta.emailUs')}</div>
                  <div className="text-gray-300">support@cropwise.in</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <div className="font-semibold">{t('cta.visitUs')}</div>
                  <div className="text-gray-300">
                    Agricultural Technology Hub<br />
                    Adyar, Manglore 575007
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

export default CTA;