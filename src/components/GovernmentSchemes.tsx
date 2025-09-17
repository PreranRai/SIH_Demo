import React, { useState } from 'react';
import { ExternalLink, FileText, Users, DollarSign, Shield, Sprout, Phone } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { governmentSchemes } from '../data/governmentSchemes';
import { GovernmentScheme } from '../types';

const GovernmentSchemes: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedScheme, setSelectedScheme] = useState<GovernmentScheme | null>(null);

  const categories = [
    { id: 'all', name: 'All Schemes', icon: <FileText className="h-5 w-5" /> },
    { id: 'subsidy', name: 'Subsidies', icon: <DollarSign className="h-5 w-5" /> },
    { id: 'insurance', name: 'Insurance', icon: <Shield className="h-5 w-5" /> },
    { id: 'loan', name: 'Loans', icon: <Users className="h-5 w-5" /> },
    { id: 'technology', name: 'Technology', icon: <Sprout className="h-5 w-5" /> }
  ];

  const filteredSchemes = selectedCategory === 'all' 
    ? governmentSchemes 
    : governmentSchemes.filter(scheme => scheme.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      subsidy: 'bg-green-100 text-green-800',
      insurance: 'bg-blue-100 text-blue-800',
      loan: 'bg-purple-100 text-purple-800',
      technology: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="schemes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('schemes.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('schemes.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {scheme.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(scheme.category)}`}>
                  {scheme.category}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {scheme.description}
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {t('schemes.benefits')}:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {scheme.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedScheme(scheme)}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  {t('schemes.learnMore')}
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scheme Detail Modal */}
        {selectedScheme && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedScheme.name}
                  </h2>
                  <button
                    onClick={() => setSelectedScheme(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 mb-6">{selectedScheme.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('schemes.eligibility')}
                    </h3>
                    <ul className="space-y-2">
                      {selectedScheme.eligibility.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('schemes.benefits')}
                    </h3>
                    <ul className="space-y-2">
                      {selectedScheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('schemes.documents')}
                    </h3>
                    <ul className="space-y-2">
                      {selectedScheme.documents.map((doc, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <FileText className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      {t('schemes.contact')}
                    </h3>
                    <p className="text-gray-600">{selectedScheme.contactInfo}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Application Process:</h4>
                    <p className="text-green-800">{selectedScheme.applicationProcess}</p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    {t('schemes.applyNow')}
                  </button>
                  <button
                    onClick={() => setSelectedScheme(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GovernmentSchemes;