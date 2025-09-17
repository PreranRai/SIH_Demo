export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [languageCode: string]: Translation;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  applicationProcess: string;
  documents: string[];
  contactInfo: string;
  category: 'subsidy' | 'insurance' | 'loan' | 'training' | 'technology';
}