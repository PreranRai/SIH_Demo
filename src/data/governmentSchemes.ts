import { GovernmentScheme } from '../types';

export const governmentSchemes: GovernmentScheme[] = [
  {
    id: 'pm-kisan',
    name: 'PM-KISAN Samman Nidhi',
    description: 'Direct income support scheme providing ₹6,000 per year to small and marginal farmers',
    eligibility: [
      'Small and marginal farmers with cultivable land up to 2 hectares',
      'Valid Aadhaar card required',
      'Bank account linked with Aadhaar',
      'Land ownership documents'
    ],
    benefits: [
      '₹6,000 per year in three equal installments of ₹2,000',
      'Direct benefit transfer to bank account',
      'No application fee required',
      'Covers all crops and farming activities'
    ],
    applicationProcess: 'Apply online through PM-KISAN portal or visit nearest Common Service Center (CSC)',
    documents: [
      'Aadhaar Card',
      'Bank Account Details',
      'Land Ownership Certificate',
      'Passport Size Photograph'
    ],
    contactInfo: 'PM-KISAN Helpline: 155261 | Website: pmkisan.gov.in',
    category: 'subsidy'
  },
  {
    id: 'pmfby',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    description: 'Comprehensive crop insurance scheme protecting farmers against crop losses',
    eligibility: [
      'All farmers including sharecroppers and tenant farmers',
      'Applicable for notified crops in notified areas',
      'Enrollment within cutoff dates',
      'Valid land records or agreements'
    ],
    benefits: [
      'Coverage for pre-sowing to post-harvest losses',
      'Low premium rates: 2% for Kharif, 1.5% for Rabi crops',
      'Quick settlement of claims',
      'Technology-based loss assessment'
    ],
    applicationProcess: 'Apply through banks, insurance companies, or online portal within specified dates',
    documents: [
      'Aadhaar Card',
      'Bank Account Details',
      'Land Records/Tenancy Agreement',
      'Sowing Certificate'
    ],
    contactInfo: 'PMFBY Helpline: 14447 | Website: pmfby.gov.in',
    category: 'insurance'
  },
  {
    id: 'kcc',
    name: 'Kisan Credit Card (KCC)',
    description: 'Credit facility for farmers to meet their agricultural and allied activities financing needs',
    eligibility: [
      'All farmers - individual/joint borrowers',
      'Tenant farmers, oral lessees, and sharecroppers',
      'Self Help Group members',
      'Age: 18-75 years'
    ],
    benefits: [
      'Flexible credit limit based on cropping pattern',
      'Simple documentation and quick processing',
      'Conversion/re-scheduling in case of natural calamities',
      'Insurance coverage for crops and farmers'
    ],
    applicationProcess: 'Apply at nearest bank branch with required documents',
    documents: [
      'Application Form',
      'Identity Proof (Aadhaar/Voter ID)',
      'Address Proof',
      'Land Documents',
      'Income Certificate'
    ],
    contactInfo: 'Contact your nearest bank branch or call bank helpline',
    category: 'loan'
  },
  {
    id: 'soil-health-card',
    name: 'Soil Health Card Scheme',
    description: 'Provides soil health cards to farmers with information on nutrient status and recommendations',
    eligibility: [
      'All farmers across the country',
      'Individual farmers and farmer groups',
      'No specific land holding criteria',
      'Valid land ownership or cultivation rights'
    ],
    benefits: [
      'Free soil testing every 2 years',
      'Customized fertilizer recommendations',
      'Improved soil health and productivity',
      'Reduced input costs'
    ],
    applicationProcess: 'Contact local agriculture department or soil testing laboratories',
    documents: [
      'Land Ownership Documents',
      'Aadhaar Card',
      'Soil Sample from field'
    ],
    contactInfo: 'Contact District Agriculture Officer or visit soilhealth.dac.gov.in',
    category: 'technology'
  },
  {
    id: 'pmksy',
    name: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
    description: 'Irrigation scheme focusing on water conservation and precision irrigation',
    eligibility: [
      'All categories of farmers',
      'Water User Associations',
      'Self Help Groups',
      'Cooperatives and FPOs'
    ],
    benefits: [
      'Subsidy on drip and sprinkler irrigation systems',
      'Water conservation and efficiency improvement',
      'Increased crop productivity',
      'Reduced water wastage'
    ],
    applicationProcess: 'Apply through state agriculture departments or implementing agencies',
    documents: [
      'Application Form',
      'Land Documents',
      'Aadhaar Card',
      'Bank Account Details',
      'Quotation for irrigation equipment'
    ],
    contactInfo: 'Contact State Agriculture Department or visit pmksy.gov.in',
    category: 'subsidy'
  },
  {
    id: 'paramparagat-krishi',
    name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    description: 'Promotes organic farming and certification of organic produce',
    eligibility: [
      'Individual farmers and farmer groups',
      'Minimum cluster size of 50 acres',
      'Commitment to organic farming for 3 years',
      'Participation in farmer groups'
    ],
    benefits: [
      '₹50,000 per hectare over 3 years',
      'Organic certification support',
      'Premium prices for organic produce',
      'Soil health improvement'
    ],
    applicationProcess: 'Form farmer groups and apply through state organic farming agencies',
    documents: [
      'Group Formation Certificate',
      'Land Documents',
      'Aadhaar Cards of all members',
      'Bank Account Details'
    ],
    contactInfo: 'Contact State Organic Farming Agency or visit pgsindia-ncof.gov.in',
    category: 'subsidy'
  },
  {
    id: 'rashtriya-gokul-mission',
    name: 'Rashtriya Gokul Mission',
    description: 'Development and conservation of indigenous bovine breeds',
    eligibility: [
      'Individual farmers and dairy farmers',
      'Self Help Groups and cooperatives',
      'Gaushalas and breeding farms',
      'Entrepreneurs in dairy sector'
    ],
    benefits: [
      'Subsidy on cattle purchase and breeding',
      'Support for feed and fodder development',
      'Training and capacity building',
      'Market linkage support'
    ],
    applicationProcess: 'Apply through state animal husbandry departments',
    documents: [
      'Application Form',
      'Identity and Address Proof',
      'Land Documents (if applicable)',
      'Bank Account Details'
    ],
    contactInfo: 'Contact State Animal Husbandry Department or visit dahd.nic.in',
    category: 'subsidy'
  },
  {
    id: 'kisan-rail',
    name: 'Kisan Rail Scheme',
    description: 'Special trains for transportation of perishable agricultural products',
    eligibility: [
      'Farmers and Farmer Producer Organizations',
      'Agricultural cooperatives',
      'Private traders dealing in agricultural produce',
      'Cold storage operators'
    ],
    benefits: [
      'Fast transportation of perishable goods',
      'Reduced transportation costs',
      'Better market access',
      'Reduced post-harvest losses'
    ],
    applicationProcess: 'Book through Indian Railways or authorized agents',
    documents: [
      'Consignment booking form',
      'Identity proof of consigner',
      'Invoice of goods',
      'Quality certificate (if required)'
    ],
    contactInfo: 'Contact nearest railway station or visit indianrailways.gov.in',
    category: 'technology'
  }
];