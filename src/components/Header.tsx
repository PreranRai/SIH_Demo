import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">CropWise</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.features')}</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.howItWorks')}</a>
            <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.impact')}</a>
            <a href="#schemes" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.schemes')}</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.contact')}</a>
          </nav>

          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.features')}</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.howItWorks')}</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.impact')}</a>
              <a href="#schemes" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.schemes')}</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.contact')}</a>
              <div className="pt-4">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;