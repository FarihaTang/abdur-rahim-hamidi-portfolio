// lib/data.ts

/* -------------------------
   Profile / Sidebar Content
--------------------------*/
export const profile = {
  name: 'Abdur Rahim HAMIDI',
  title: 'Priestley Climate Scholar · ESRC WRDTP Funded Researcher',
  location: 'Leeds, United Kingdom',
  email: 'hamidi.abdur@yahoo.com',
  phone: '+44 74435224',
  address:
    'Sustainability Research Institute, School of Earth and Environment, University of Leeds',

  sidebarSummary:
    'Climate resilience and disaster risk researcher integrating political ecology and decolonial environmental approaches, with a focus on vulnerability, governance, and equitable adaptation.',

  summary: [
    'My research focuses on the human dimensions of climate change and disasters, emphasizing vulnerability, resilience, and disaster risk reduction (DRR) in context-specific settings.',
    'I integrate political ecology and decolonial environmental approaches to analyse how power, history, and knowledge shape human–environment relations and uneven climate impacts.',
    'My work explores how frontline communities experience climate and disaster risks, paying special attention to structural inequalities, governance processes, and colonial legacies shaping vulnerability and adaptive capacity.',
    'Using mixed-methods research, GIS-based spatial analysis, and community-engaged fieldwork, I co-produce knowledge to generate policy-relevant insights and locally actionable strategies for equitable resilience and sustainable development.',
  ],

  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdur-rahim-hamidi-b87208119/?trk=opento_sprofile_details',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?hl=en&user=BN1-YIIAAAAJ&view_op=list_works&sortby=pubdate',
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Abdur-Rahim-Hamidi?ev=hdr_xprf',
    },
    { label: 'ORCiD', href: 'https://orcid.org/my-orcid?orcid=0000-0002-6380-516X' },
  ],
};

/* -------------------------
   Navigation
--------------------------*/
export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'grants', label: 'Grants & Funding' },
  { id: 'trainings', label: 'Trainings' },
  { id: 'awards', label: 'Awards' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'seminars', label: 'Seminars & Conferences' },
];

/* -------------------------
   Skills
--------------------------*/
export const skills = {
  research: [
    'Climate resilience',
    'Disaster Risk Reduction (DRR)',
    'Hazard & vulnerability assessment',
    'Environmental governance',
    'Mixed-methods research',
    'Systematic reviews',
    'Community-engaged fieldwork',
  ],
  methods: [
    'Household & community surveys',
    'Key informant interviews',
    'Focus groups',
    'Participatory assessments',
    'Workshops and co-production',
    'Qualitative data analysis',
  ],
  tools: [
    'ArcGIS',
    'SPSS',
    'NVivo',
    'R (basic)',
    'Python (beginner)',
    'MS Word / Excel / PowerPoint',
    'Canva',
    'OriginPro',
    'Survey design platforms',
  ],
};

/* -------------------------
   Publications
--------------------------*/
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
    authors: 'Hamidi, A.R., Novo, P., and Paavola, J.',
    journal: 'International Journal of Disaster Risk Reduction, 116',
    link: 'https://doi.org/10.1016/j.ijdrr.2024.105124',
  },
  {
    year: 2023,
    title:
      'Flood risk assessment to population in Afghanistan: A Spatial Analysis of Hazard, Exposure and Vulnerability',
    authors: 'Qiyamud, D.I., Jamalzi, A.R., Hamidi, A.R., Ullah, I., Shahab, M.',
    journal: 'Natural Hazards Research',
    link: 'https://doi.org/10.1016/j.nhres.2023.09.006',
  },
  {
    year: 2022,
    title:
      'Flood exposure and social vulnerability analysis in rural areas of developing countries: A case study of Charsadda District, Pakistan',
    authors: 'Hamidi, A.R., Jing, L., Shahab, M., Azam, K.',
    journal: 'Water, 14(7), 1176',
    link: 'https://doi.org/10.3390/w14071176',
  },
  {
    year: 2021,
    title:
      'Utilizing user-generated content and GIS for flood susceptibility assessment in mountainous areas',
    authors: 'Zeng, Z., Li, Y., Lan. J., & Hamidi, A.R.',
    journal: 'Sustainability 13(12), 6929',
    link: 'https://doi.org/10.3390/su13126929',
  },
  {
    year: 2020,
    title: 'Household vulnerability to floods and cyclones in Pakistan',
    authors: 'Hamidi, A.R., Zeng, Z., & Khan, M.A.',
    journal: 'International Journal of Disaster Risk Reduction, 46',
    link: 'https://doi.org/10.1016/j.ijdrr.2020.101496',
  },
  {
    year: 2020,
    title: 'Flood vulnerability assessment using MOVE framework',
    authors: 'Hamidi, A.R., Wang, J., Guo, S., & Zeng, Z.',
    journal: 'Natural Hazards 101, 385–408',
    link: 'https://doi.org/10.1007/s11069-020-03878-0',
  },
  {
    year: 2020,
    title: 'Integrating Internet media into urban flooding susceptibility assessment',
    authors: 'Zeng, Z., Lan, J., Hamidi, A.R., & Zou, S.',
    journal: 'Cities 101, 102697',
    link: 'https://doi.org/10.1016/j.cities.2020.102697',
  },
];

/* -------------------------
   Under-review Manuscripts
--------------------------*/
export const manuscripts = [
  'Rethinking Flood Resilience: Systemic Risk, Social Vulnerability, and Governance Failures in the Himalayan–Indus Region',
  'Communication-Related Vulnerabilities: Insights from Flood-Prone Communities in Pakistan',
  'Voices from the Floodplain: Understanding Flood Vulnerability and Governance Deficiencies in Pakistan',
  'A Critique of Climate Objectivity in the Context of Global Injustice',
];

/* -------------------------
   Education
--------------------------*/
export const education = [
  {
    degree: 'PhD in Earth and Environment',
    school: 'University of Leeds – School of Earth and Environment',
    location: 'Leeds, United Kingdom',
    period: 'September 2023 – Present',
    highlights: [
      'Research focus: Flood exposure, social vulnerability, and governance in Pakistan',
      'Affiliations: Sustainability Research Institute; CCAVS; Life and Land; water@leeds',
      'Collaborations: Interdisciplinary research, teaching, module design, and assessment support',
    ],
  },
  {
    degree: 'MA in Social Research',
    school: 'University of Leeds – School of Sociology and Social Policy',
    location: 'Leeds, United Kingdom',
    period: 'September 2022 – August 2023',
    highlights: [
      'Core modules in qualitative & quantitative methods, policy evaluation, and climate adaptation',
      'Dissertation: Household Flood Resilience Complexities',
    ],
  },
  {
    degree: 'Master’s in Public Administration',
    school: 'Huazhong University of Science and Technology',
    location: 'Wuhan, China',
    period: 'September 2017 – July 2019',
    highlights: [
      'Research on emergency management and risk communication',
      'Dissertation: Barriers to Risk Communication in Flood Emergency Management',
    ],
  },
  {
    degree: 'BSc in Disaster Management',
    school: 'University of Peshawar – CDPM',
    location: 'Peshawar, Pakistan',
    period: 'September 2012 – June 2016',
    highlights: [
      'Core training in DRR, hazard assessment, emergency management, GIS & remote sensing',
      'Project: Household vulnerability to floods and windstorms in KPK',
    ],
  },
];

/* -------------------------
   Grants & Funding
--------------------------*/
export const grants = [
  'Economic and Social Research Council (ESRC) – WRDTP Doctoral Studentship (2022–2026)',
  'WRDTP/ESRC Overseas Institutional Visit Funding – £4,000 (2025)',
  'WRDTP/ESRC Overseas Fieldwork Funding – £4,500 (2025)',
  'Chinese Government Scholarship (Postgraduate) – Fully funded (2017–2019)',
  'DAFI Undergraduate Scholarship (UNHCR / Albert Einstein Initiative) (2014–2016)',
];

/* -------------------------
   Teaching Experience
--------------------------*/
export const experience = [
  {
    role: 'Teaching Assistant & Seminar Leader – Economics and Sustainability',
    org: 'University of Leeds – School of Earth and Environment',
    location: 'Leeds, UK',
    period: 'September 2023 – Present',
    bullets: [
      'Leading seminars and tutorials on sustainability and economics',
      'Designing and facilitating case studies and applied scenario exercises',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'University of Leeds',
    location: 'Leeds, UK',
    period: 'September 2023 – Present',
    bullets: [
      'Supporting MSc and UG modules: Research Methods, Research Project, Environmental Social Sciences',
      'Guiding students on research design, methodology, academic writing, and analysis',
      'Facilitating drop-ins and group workshops',
      'Delivering SPSS demonstrations and troubleshooting',
    ],
  },
  {
    role: 'Assessment Support / Mark Management',
    org: 'University of Leeds',
    location: 'Leeds, UK',
    period: '2023 – Present',
    bullets: [
      'Supporting mark compilation for MSc and UG modules',
      'Ensuring accurate grade management and communication',
      'Coordinating with module leaders and external markers',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Huazhong University of Science and Technology',
    location: 'Wuhan, China',
    period: 'August 2019 – July 2021',
    bullets: [
      'Contributed to NSFC-funded project on disaster emergencies',
      'Conducted data analysis, literature reviews, and report writing',
      'Supported publication of peer-reviewed journal articles',
    ],
  },
  {
    role: 'Research Associate',
    org: 'National Defence University',
    location: 'Islamabad, Pakistan',
    period: 'April 2016 – August 2017',
    bullets: [
      'Worked on Higher Education Commission-funded DRR projects',
      'Conducted vulnerability, risk, and resilience assessments',
      'Designed tools, collected data, prepared reports',
    ],
  },
  {
    role: 'Research Associate',
    org: 'ACF International Pakistan',
    location: 'Pakistan',
    period: 'October 2016 – February 2017',
    bullets: [
      'Collaborated on DRR programmes with PDMA and CDPM University of Peshawar',
      'Led surveys, interviews, focus groups with at-risk communities',
      'Prepared analytical reports for local DRR planning',
    ],
  },
];

/* -------------------------
   Trainings & Workshops
--------------------------*/
export const trainings = [
  'Accessible Teaching, Learning, Work (2025)',
  'EDI Training (2025)',
  'Information Governance (2024)',
  'Information Security (2024)',
  'Data Protection (2024)',
  'Research Ethics & Integrity (2024)',
  'Mixed Methods (2024)',
  'Systematic Reviews (2024)',
  'Project Management Foundations (2024)',
  'Emergency Response Management (2016)',
  'Advanced First Aid (2015)',
];

/* -------------------------
   Awards & Achievements
--------------------------*/
export const awards = [
  'Academic Excellence Award – HUST (2022)',
  'Academic Excellence Award – HUST (2021)',
  'Outstanding International Graduate – HUST (2019)',
  'Outstanding Student Cadre – HUST (2018)',
  'Excellent Volunteer Award – HUST (2018)',
  '2nd Position Undergraduate Studies (2016)',
  '1st Place – 8th International Disaster Management Exhibition (2016)',
  '1st Place – 7th International Disaster Management Exhibition (2015)',
];

/* -------------------------
   Leadership & Volunteer Experience
--------------------------*/
export const leadership = [
  {
    role: 'Coordinator – SICA Volunteer Club',
    org: 'HUST',
    period: '2018–2019',
    bullets: [
      'Led volunteer teams supporting new international students',
      'Organised cultural events and field trips',
      'Awarded Best Volunteer of the Year',
    ],
  },
  {
    role: 'Group Leader – ACF International Pakistan',
    period: '2016–2017',
    bullets: [
      'Led team to develop DRR-inclusive IDP camp model',
      'Awarded Model of the Year (IDME-2016)',
    ],
  },
  {
    role: 'Ilmbassador – DOST Welfare Foundation',
    period: '2014–2016',
    bullets: [
      'Identified out-of-school children and enrolled them in schools',
      'Improved parent engagement and tracked student progress',
    ],
  },
];

/* -------------------------
   Seminars & Conferences
--------------------------*/
export const seminars = [
  'Risk, Resilience, and Adaptation – Priestley Centre (2025)',
  'Systematic Evidence Synthesis – CCAVS Research Group (2025)',
  'Navigating Interdisciplinarity in Climate Research – Priestley Centre (2024)',
  'Rethinking Hope and Imagination – Remaking Places Network (2024)',
  'Climate Policy & Energy Transitions – Webinar (2023)',
  'ICONPO International Conference – Asia Pacific Society for Public Affairs (2021)',
  'Smart City Digital Twins – Distinguished Lecture Series (2021)',
  'Urban Flooding & Digital Twins – ISO/IEC JTC Webinar (2021)',
  'Belt & Road – HUST & NTU Seminar (2019)',
  'Disaster Awareness Day – NDMA Pakistan (2016)',
];
