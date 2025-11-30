// lib/data.ts
export const profile = {
  name: 'Abdur Rahim Hamidi',
  location: 'Leeds, United Kingdom',
  title: 'Priestley Climate Scholar · DRR & Climate Resilience Researcher',
  summary: [
    'My research centres on the human dimensions of climate change and disasters, with a focus on vulnerability, resilience, and disaster risk reduction in specific context settings.',
    'I examine how communities perceive, experience, and respond to climate and disaster risks, drawing on political ecology and decolonial perspectives to understand how power, history, and knowledge shape human–environment relations.',
    'Using mixed methods, GIS-based spatial analysis, and participatory fieldwork, my work aims to translate evidence into policy-relevant insights and equitable, practical solutions.',
  ],
  contacts: {
    email: 'hamidi.abdur@yahoo.com',
    phone: '+44 74435224',
    address:
      'Sustainability Research Institute, School of Earth and Environment, University of Leeds',
  },
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/ar-hamidi' },
    { label: 'Google Scholar', href: '#' },
    { label: 'ResearchGate', href: '#' },
    { label: 'ORCiD', href: '#' },
  ],
};

export const education = [
  {
    school: 'University of Leeds – School of Earth and Environment',
    degree: 'PhD in Earth and Environment (Environment)',
    period: 'Sep 2023 – Present',
    location: 'Leeds, United Kingdom',
    highlights: [
      'Research focus: Flood exposure, social vulnerability, and environmental governance to strengthen flood risk governance in Pakistan.',
      'Affiliations: Sustainability Research Institute; Climate Change Adaptation, Vulnerability & Services; Life and Land; water@leeds.',
    ],
  },
  {
    school: 'University of Leeds – School of Sociology and Social Policy',
    degree: 'MA in Social Research',
    period: 'Sep 2022 – Aug 2023',
    location: 'Leeds, United Kingdom',
    highlights: [
      'Dissertation: Household Flood Resilience Complexities in Nowshera District, Pakistan: A Multidimensional Analysis.',
    ],
  },
  {
    school: 'Huazhong University of Science and Technology – College of Public Administration',
    degree: 'Master’s in Public Administration',
    period: 'Sep 2017 – Jul 2019',
    location: 'Wuhan, China',
    highlights: [
      'Dissertation: Barriers to Risk Communication in Flood Emergency Management: Case Studies from Pakistan.',
    ],
  },
  {
    school: 'University of Peshawar – Centre for Disaster Preparedness and Management',
    degree: 'BSc in Disaster Management',
    period: 'Sep 2012 – Jul 2016',
    location: 'Peshawar, Pakistan',
    highlights: [
      'Project: Household vulnerability to floods and windstorms in Khyber Pakhtunkhwa, Pakistan.',
    ],
  },
];

export const skills = {
  research: [
    'Disaster risk reduction (DRR)',
    'Climate resilience',
    'Hazard and vulnerability assessment',
    'Environmental governance',
    'Mixed-methods research',
    'Systematic reviews',
  ],
  methods: [
    'Household & community surveys',
    'Interviews & focus groups',
    'Participatory assessments & workshops',
    'GIS-based spatial analysis',
    'Data visualization for policy & science',
  ],
  tools: [
    'ArcGIS',
    'SPSS',
    'NVivo',
    'R (basic)',
    'Python (beginner)',
    'MS Excel & PowerPoint',
    'Canva',
    'OriginPro',
  ],
};

export const publications = [
  {
    year: 2025,
    title:
      'Identifying gaps in research on social vulnerability to floods: A systematic review of indicators, indexes, and methodological approaches',
    authors: 'Hamidi, A.R., Novo, P., Paavola, J., and Ford, J.D.',
    journal: 'Environmental Research Letters',
    link: 'https://doi.org/10.1088/1748-9326/ae1496',
  },
  {
    year: 2025,
    title: 'Arctic Warming: Cascading Climate Impacts and Global Consequences',
    authors: 'Malik, I.H., Ahmed, R., Ford, J.D., Hamidi, A.R.',
    journal: 'Climate, 13, 85',
    link: 'https://doi.org/10.3390/cli13050085',
  },
  {
    year: 2024,
    title:
      'Household Flood Resilience in the Nowshera District, Pakistan: A Multidimensional Analysis',
    authors: 'Hamidi, A.R., Novo, P., and Paavola, P.',
    journal: 'International Journal of Disaster Risk Reduction, 116, 105124',
    link: 'https://doi.org/10.1016/j.ijdrr.2024.105124',
  },
  // ...add remaining publications as needed
];

export const experience = [
  {
    role: 'Teaching Assistant & Seminar Leader, Economics and Sustainability',
    org: 'School of Earth and Environment, University of Leeds',
    location: 'Leeds, UK',
    period: 'Sep 2023 – Present',
    bullets: [
      'Lead seminars and tutorials to develop student understanding of economics and sustainability concepts.',
      'Facilitate case study analysis and scenario exercises to demonstrate practical applications of sustainability principles.',
    ],
  },
  {
    role: 'Teaching Assistant (Research Methods & Environmental Social Sciences)',
    org: 'University of Leeds',
    location: 'Leeds, UK',
    period: 'Sep 2023 – Present',
    bullets: [
      'Support Masters and Undergraduate modules including Research Methods and Environmental Research Project.',
      'Provide one-to-one and group guidance on research design, data collection, analysis, and academic writing.',
      'Deliver SPSS demonstrations, including installation, dataset management, analysis, and results interpretation.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Huazhong University of Science and Technology – College of Public Administration',
    location: 'Wuhan, China',
    period: 'Aug 2019 – Apr 2021',
    bullets: [
      'Contributed to a National Natural Science Foundation of China project on user-generated content and emergency management decision support.',
      'Supported literature reviews, data analysis, and publication of peer-reviewed articles.',
    ],
  },
  // ...add the rest of your roles
];

export const trainings = [
  'Accessible Teaching, Learning, and Work (2025)',
  'Equity, Diversity, and Inclusion (EDI) Training (2025)',
  'Information Governance, Information Security & Data Protection (2024)',
  'Mixed Methods; Systematic Reviews; Research Ethics & Applications (2023–2024)',
  'Project Management (Foundation + Simplified) (2024)',
];

export const awards = [
  'WRDTP – ESRC PhD Studentship (current, from 2022)',
  'Academic Excellence Awards, HUST, China (2021, 2022)',
  'Outstanding International Graduate, HUST (2019)',
  'Chinese Government Scholarship (2017–2019)',
  'DAFI Scholar – UNHCR & Albert Einstein German Academic Refugee Initiative (2014–2016)',
  '1st Place – International Disaster Management Exhibitions (2015, 2016)',
];

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
];
