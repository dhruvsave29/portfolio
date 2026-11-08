/**
 * Central portfolio data — generated from Dhruv's resumes (7 role-tailored PDFs).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on a resume / project repo.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dhruv Prashantkumar Save',
  displayName: 'Dhruv Save',
  firstName: 'DHRUV',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SAVE ORIGINAL',
  role: 'Software Developer',
  tagline: ['Winner — COHERENCE Hackathon', 'AI / ML Honours', 'Full-Stack · Android'],
  intro:
    'Computer Engineering graduate (Honours in AI/ML, University of Mumbai) who builds AI products end-to-end — from LLM/RAG pipelines and FastAPI services to on-device Android apps. Winner, COHERENCE Hackathon. I measure everything before it ships: 42/42 tests passing, 30+ minutes of manual screening cut to under 15 seconds.',
  location: 'Mumbai, Maharashtra',
  email: 'dhruvsavecc@gmail.com',
  phone: '+91 98238 25212',
  links: {
    linkedin: 'https://www.linkedin.com/in/dhruvsave',
    github: 'https://github.com/dhruvsave29',
  },
  resumePdf: '/assets/Dhruv_Save_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dhruv Save',
  },
  interests: ['RAG & LLMs', 'Computer Vision', 'Blockchain & Web3'],
};

export const education = [
  {
    school: 'Vidyavardhini’s College of Engineering and Technology',
    place: 'Vasai',
    degree: 'Bachelor of Engineering — Computer Engineering, Honours in AI/ML · University of Mumbai',
    period: 'July 2022 – June 2026',
    score: 'CGPA 7.85',
  },
  {
    school: 'Bhavan’s College',
    place: 'Andheri',
    degree: 'HSC — Maharashtra State Board',
    period: 'June 2020 – July 2022',
    score: '77.3%',
  },
];

export const experience = [
  {
    company: 'Acmegrade',
    role: 'Web Developer Intern',
    place: 'Remote',
    period: 'February 2024 – March 2024',
    points: [
      'Built and shipped responsive web application features during a hands-on web development internship.',
      'Improved UI responsiveness and page performance through code-level optimizations.',
      'Worked across front-end and back-end functionality in a cross-functional setup.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'cognistream',
    title: 'CogniStream',
    year: '2026',
    genre: 'AI • Healthcare • RAG',
    logline: 'An AI-powered clinical trial matcher — patient-to-trial screening cut from 30+ minutes to under 15 seconds.',
    stack: ['Next.js', 'TypeScript', 'Python', 'Groq LLM', 'FastAPI'],
    build: [
      'Built a 4-layer Python pipeline (data anonymization, deterministic rule validation, semantic matching, geo-filtering), tested across 50 synthetic patients and 30+ trials.',
      'Protected patient data and kept every decision auditable — HIPAA-focused anonymization, AES-256 encryption, audit logging, with explainable pass/fail eligibility reasoning.',
      'Ranked trial matches by eligibility and location by integrating RAG with a Groq LLM, Google Maps distance APIs and composite scoring in FastAPI services.',
    ],
    features: [
      '4-layer screening pipeline (anonymize → validate → match → geo-filter)',
      'Explainable pass/fail eligibility reasoning',
      'HIPAA-focused anonymization + AES-256 encryption + audit logging',
      'RAG over trial data with a Groq LLM',
      'Google Maps distance-aware ranking',
    ],
    metrics: [
      { value: '30m → <15s', label: 'patient-to-trial screening time' },
      { value: '4', label: 'pipeline layers' },
      { value: '50', label: 'synthetic patients validated' },
      { value: '30+', label: 'clinical trials matched' },
      { value: '100%', label: 'auditable eligibility decisions' },
    ],
    github: 'https://github.com/Abhishek222983101/Paradigm-AlgoForge26',
    palette: { from: '#031527', via: '#0a4a7a', to: '#04070d', accent: '#3fd1ff' },
    motif: 'flow',
  },
  {
    id: 'braillevision',
    title: 'BrailleVision',
    year: '2026',
    genre: 'Android • Computer Vision • Accessibility',
    logline: 'An offline Android app that runs YOLOv8 on-device to read text aloud for visually impaired users — in real time.',
    stack: ['Kotlin', 'TensorFlow Lite', 'YOLOv8-nano', 'Jetpack Compose', 'CameraX'],
    build: [
      'Enabled real-time, fully offline text detection by running YOLOv8-nano (TensorFlow Lite) on-device on the live camera feed of a Jetpack Compose + CameraX Android app.',
      'Engineered the detection post-processing — bounding-box scaling, confidence thresholding, Non-Maximum Suppression — to turn raw model output into clean, accurate text regions.',
      'Built an NLP reconstruction layer combining Viterbi dynamic programming and SymSpell correction, then read the cleaned text aloud via TTS with adjustable rate and pitch.',
    ],
    features: [
      'Real-time text detection on live camera feed',
      'Fully offline — YOLOv8-nano runs on-device via TensorFlow Lite',
      'NMS + bounding-box post-processing pipeline',
      'Viterbi DP + SymSpell text reconstruction',
      'TTS with adjustable rate and pitch',
    ],
    metrics: [
      { value: '100%', label: 'offline, on-device inference' },
      { value: 'YOLOv8', label: 'nano model via TensorFlow Lite' },
      { value: '2', label: 'NLP stages (Viterbi DP + SymSpell)' },
      { value: '© 1', label: 'Indian Copyright — "Sight Sense"' },
    ],
    github: 'https://github.com/dhruvsave29/BrailleVision',
    palette: { from: '#03161f', via: '#0b5566', to: '#05080d', accent: '#35d6ff' },
    motif: 'shield',
  },
  {
    id: 'vault',
    title: 'VAULT',
    year: '2025',
    genre: 'Web3 • Marketplace • FastAPI',
    logline: 'A decentralized AI model marketplace on Solana — publish models, earn per use, with on-chain payment verification.',
    stack: ['Solana', 'Anchor', 'Token-2022', 'FastAPI', 'ONNX Runtime', 'Next.js 16', 'IPFS'],
    build: [
      'Built a decentralized AI model marketplace on Solana, letting developers publish models and earn automatically every time someone uses them — blockchain handles ownership and payments.',
      'Designed the revenue split (70% to model creators, 25% to compute providers), backed by IPFS-encrypted model storage and on-chain payment verification before access.',
      'Built the Next.js marketplace with wallet-based buy flow and model upload, and validated it end-to-end with 42/42 automated tests passing.',
    ],
    features: [
      'On-chain payment verification before model access',
      '70% creator / 25% compute-provider revenue split',
      'IPFS-encrypted model storage',
      'Wallet-based buy flow + model upload (Next.js 16)',
      'ONNX Runtime inference on FastAPI backend',
    ],
    metrics: [
      { value: '42/42', label: 'automated tests passing' },
      { value: '70/25', label: 'creator / compute revenue split' },
      { value: 'Per use', label: 'automatic creator payouts' },
      { value: 'Solana', label: 'on-chain payments & ownership' },
    ],
    github: 'https://github.com/dhruvsave29/vault',
    palette: { from: '#0a1030', via: '#1c3f9e', to: '#05070d', accent: '#4c8dff' },
    motif: 'tenants',
  },
  {
    id: 'mediscript',
    title: 'MediScript',
    year: '2026',
    genre: 'AI • Speech • Browser',
    logline: 'Live medical transcription — browser VAD, a local Whisper engine, and a clinical summary from a local LLM. Nothing leaves the device.',
    stack: ['Python', 'Faster-Whisper', 'Silero VAD', 'Local LLM', 'Browser APIs'],
    build: [
      'Listens to a doctor–patient consultation through the mic and filters silence with Silero VAD, transcribing speech live and in order with faster-whisper.',
      'Produces a structured clinical summary at the end of the session with a local LLM — patient details, complaints, symptoms, assessment and plan, never inventing facts.',
      'Answers questions through a transcript-aware assistant that speaks only from the session record — no cloud LLM, no API key, no analytics, no storage.',
    ],
    features: [
      'Silero VAD in the browser — auto-chunks speech, silence never reaches the recogniser',
      'Live transcription with faster-whisper',
      'Local-LLM structured clinical summary (editable, clipboard-ready)',
      'Floating assistant chat answering only from the transcript',
      'Everything runs on the machine — the transcript never leaves the device',
    ],
    metrics: [
      { value: '0', label: 'cloud dependencies — fully local' },
      { value: 'Live', label: 'real-time transcription' },
      { value: 'Silero', label: 'voice activity detection in-browser' },
      { value: '1', label: 'session → record-ready summary' },
    ],
    github: 'https://github.com/dhruvsave29/medical-transcribe',
    palette: { from: '#020d1c', via: '#15507a', to: '#05070d', accent: '#41c7ff' },
    motif: 'flow',
  },
  {
    id: 'serenity',
    title: 'Serenity',
    year: '2026',
    genre: 'NLP • Mental Health • Hackathon',
    logline: 'An NLP-based mental-health platform built at PEC HACKS 2.0 — finishing top 10 internationally.',
    stack: ['Python', 'NLP', 'Next.js'],
    build: [
      'Built an NLP-based mental-health platform at PEC HACKS 2.0, an international-level hackathon hosted at PEC College, Tamil Nadu.',
      'Finished in the top 10 internationally, competing against teams from across the country.',
    ],
    features: [
      'NLP-powered mental-health experience',
      'Built in one weekend of hacking',
      'Top 10 finish on the international stage',
    ],
    metrics: [
      { value: 'Top 10', label: 'international rank at PEC HACKS 2.0' },
      { value: '48h', label: 'from idea to working demo' },
      { value: 'NLP', label: 'core experience layer' },
    ],
    github: 'https://github.com/wajiha-kulsum/H10_crwdstrk',
    palette: { from: '#0d1030', via: '#3d249e', to: '#06070d', accent: '#8f9dff' },
    motif: 'shield',
  },
  {
    id: 'gamerstop',
    title: 'GamerStop',
    year: '2025',
    genre: 'Android • Firebase • Esports',
    logline: 'An esports tournament platform on Android, backed end-to-end by Firebase — Semester 6 mini project.',
    stack: ['Android', 'Java', 'XML', 'Firebase'],
    build: [
      'Built an Android esports tournament platform as a Semester 6 college mini project, using Firebase for the app’s backend data and services.',
      'Designed every screen in XML and implemented the app logic in Java on Android Studio.',
    ],
    features: [
      'Tournament platform experience on Android',
      'Firebase-backed data & services',
      'Classic XML + Java Android build',
    ],
    metrics: [
      { value: 'Sem 6', label: 'college mini project' },
      { value: 'Firebase', label: 'realtime app backend' },
      { value: 'Java+XML', label: 'full Android Studio build' },
    ],
    palette: { from: '#12100a', via: '#6b5320', to: '#080806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'coherence',
    title: 'Winner',
    org: 'COHERENCE Hackathon 2026',
    detail: 'Led CogniStream — an AI-powered clinical trial matching engine — for Team Paradigm.',
    laurel: 'Hackathon Winner',
    link: 'https://github.com/Abhishek222983101/Paradigm-AlgoForge26',
  },
  {
    id: 'pec-hacks',
    title: 'Top 10',
    org: 'PEC HACKS 2.0',
    detail: 'Built Serenity, an NLP-based mental-health platform, at this international-level hackathon at PEC College, Tamil Nadu.',
    laurel: 'International',
    link: 'https://github.com/wajiha-kulsum/H10_crwdstrk',
  },
  {
    id: 'sight-sense-copyright',
    title: 'Copyright Registered',
    org: 'Indian Copyright Office',
    detail: 'Co-authored and registered BrailleVision with the Indian Copyright Office as "Sight Sense: A Blind Assistive App".',
    laurel: 'IP Registered',
  },
  {
    id: 'engineering-rigor',
    title: '42/42 Tests',
    org: 'VAULT — Solana Marketplace',
    detail: 'Verified the decentralized marketplace end-to-end with 42/42 automated tests passing.',
    laurel: 'Engineering Rigor',
  },
  {
    id: 'leadership',
    title: 'Leader On Campus',
    org: 'VCET · NSS · Kabaddi',
    detail: 'Treasurer of NSS (National Service Scheme), Secretary of the Android Development Club, and Captain of the Kabaddi team.',
    laurel: 'On Campus',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Infosys', name: 'Fundamentals of Python' },
  { issuer: 'Infosys', name: 'Fundamentals of Java' },
  { issuer: 'Infosys', name: 'Data Structures and Algorithms' },
  { issuer: 'AI Engineer', name: 'AI Engineer Certificate' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python leads the cast',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Java', mono: 'Jv' },
      { name: 'Kotlin', mono: 'Kt' },
      { name: 'C/C++', mono: 'C+' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    subtitle: 'From on-device to APIs',
    skills: [
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'YOLOv8', mono: 'Y8' },
      { name: 'RAG', mono: 'Ra' },
      { name: 'LLMs', mono: 'Lm' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'ONNX Runtime', mono: 'On' },
      { name: 'PyTorch', mono: 'Pt' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Full-Stack',
    subtitle: 'Next.js to FastAPI',
    skills: [
      { name: 'Next.js', mono: 'Nx' },
      { name: 'React', mono: 'Re' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'HTML/CSS', mono: 'Hc' },
      { name: 'Node.js', mono: 'No' },
    ],
  },
  {
    id: 'android',
    title: 'Android & Mobile',
    subtitle: 'Kotlin, offline AI',
    skills: [
      { name: 'Android Studio', mono: 'As' },
      { name: 'Jetpack Compose', mono: 'Jc' },
      { name: 'CameraX', mono: 'Cx' },
      { name: 'TensorFlow Lite', mono: 'Tl' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'XML Layouts', mono: 'Xm' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    subtitle: 'Cleaning → insight',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Excel', mono: 'Ex' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Data Cleaning', mono: 'Dc' },
      { name: 'EDA', mono: 'Ed' },
    ],
  },
  {
    id: 'tools',
    title: 'Web3 & Tools',
    subtitle: 'Shipping & the chain',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Solana', mono: 'So' },
      { name: 'Anchor', mono: 'An' },
      { name: 'IPFS', mono: 'If' },
      { name: 'Automated Testing', mono: 'At' },
      { name: 'AES-256', mono: 'Ae' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['CogniStream', 'COHERENCE Winner', 'Infosys — Fundamentals of Python', 'Data pipeline skills'],
  TypeScript: ['CogniStream', 'VAULT', 'Next.js frontends'],
  Java: ['GamerStop', 'Infosys — Fundamentals of Java'],
  Kotlin: ['BrailleVision', 'Jetpack Compose apps'],
  'C/C++': ['Coursework', 'Engineering fundamentals'],
  SQL: ['SQL Certificate', 'DBMS coursework', 'Data roles'],
  TensorFlow: ['BrailleVision', 'Infosys ML toolkit', 'Deep Learning practice'],
  YOLOv8: ['BrailleVision', 'TFLite on-device inference'],
  RAG: ['CogniStream', 'Groq LLM integration'],
  LLMs: ['CogniStream', 'Groq LLM', 'RAG pipelines'],
  NLP: ['Serenity', 'Viterbi + SymSpell pipeline', 'Infosys coursework'],
  'Deep Learning': ['YOLOv8-nano detection', 'AI/ML Honours coursework'],
  'ONNX Runtime': ['VAULT — inference backend'],
  PyTorch: ['VAULT — ONNX Runtime inference', 'ML engineering coursework'],
  'Next.js': ['CogniStream', 'VAULT', 'MediScript'],
  React: ['Next.js frontends across projects'],
  FastAPI: ['CogniStream', 'VAULT backends'],
  'REST APIs': ['CogniStream', 'VAULT', 'API integrations'],
  'HTML/CSS': ['Acmegrade internship', 'Responsive web builds'],
  'Node.js': ['Full-Stack Developer resume stack'],
  'Android Studio': ['BrailleVision', 'GamerStop'],
  'Jetpack Compose': ['BrailleVision camera app'],
  CameraX: ['BrailleVision live feed'],
  'TensorFlow Lite': ['BrailleVision — on-device YOLOv8'],
  Firebase: ['GamerStop backend'],
  'XML Layouts': ['GamerStop'],
  Pandas: ['Data Analyst resume — core tooling'],
  NumPy: ['Data Analyst resume', 'ML preprocessing'],
  Excel: ['Data cleanup & reporting'],
  Matplotlib: ['Visualization & reporting'],
  'Data Cleaning': ['CogniStream anonymization layer', 'Data Analyst resume'],
  EDA: ['Data Analyst resume — exploratory analysis'],
  'Git / GitHub': ['All projects', 'dhruvsave29 on GitHub'],
  Solana: ['VAULT on-chain marketplace'],
  Anchor: ['VAULT Solana programs'],
  IPFS: ['VAULT — encrypted model storage'],
  'Automated Testing': ['VAULT — 42/42 tests passing'],
  'AES-256': ['CogniStream encryption layer'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const indigo: Palette = { from: '#0a1030', via: '#1c3f9e', to: '#05070d', accent: '#4c8dff' };
const cyan: Palette = { from: '#03161f', via: '#0b5566', to: '#05080d', accent: '#35d6ff' };
const teal: Palette = { from: '#031510', via: '#0d5a40', to: '#050a08', accent: '#3ee6b0' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const gold: Palette = { from: '#12100a', via: '#6b5320', to: '#080806', accent: '#ffb547' };
const pearl: Palette = { from: '#020d1c', via: '#15507a', to: '#05070d', accent: '#41c7ff' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2022',
    synopsis: 'Higher secondary at Bhavan’s College, Andheri — mathematics, science and the first spark of interest in computing.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'HSC at Bhavan’s College, Andheri — finished with 77.3% on the Maharashtra State Board.',
        tags: ['HSC', 'Bhavan’s College'],
        runtime: 'Jun 2020 – Jul 2022',
        palette: gold,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: The Engineer',
    period: '2022 – 2026',
    synopsis: 'BE Computer Engineering with Honours in AI/ML at Vidyavardhini’s College of Engineering and Technology, University of Mumbai.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Honours Track',
        description: 'Bachelor of Engineering in Computer Engineering with Honours in AI/ML — CGPA 7.85. Coursework across Machine Learning, NLP, AI, OS and DBMS.',
        tags: ['BE', 'AI/ML Honours', 'UoM'],
        runtime: 'Jul 2022 – Jun 2026',
        palette: indigo,
      },
      {
        code: 'S02 E02',
        title: 'The Intern',
        description: 'Web Developer Intern at Acmegrade — shipped responsive web features and improved UI responsiveness and page performance.',
        tags: ['Acmegrade', 'Web Dev'],
        runtime: 'Feb 2024 – Mar 2024',
        palette: cyan,
      },
      {
        code: 'S02 E03',
        title: 'The Campus Leader',
        description: 'Treasurer of NSS, Secretary of the Android Development Club, and Captain of the Kabaddi team — leadership across campus life.',
        tags: ['NSS', 'Android Club', 'Kabaddi'],
        runtime: 'Throughout',
        palette: teal,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2024 – 2025',
    synopsis: 'Certifications, fundamentals and the first shipped apps — from Android to the first Original.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Certified',
        description: 'Infosys certifications — Fundamentals of Python, Fundamentals of Java, Data Structures and Algorithms — plus an AI Engineer certificate.',
        tags: ['Infosys', 'Python', 'Java', 'DSA'],
        runtime: '4 credentials',
        palette: gold,
      },
      {
        code: 'S03 E02',
        title: 'GamerStop',
        description: 'Semester 6 mini project — an esports tournament platform on Android with a Firebase backend, built in Java and XML.',
        tags: ['Android', 'Firebase'],
        runtime: '2025',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'VAULT',
        description: 'December 2025 — a decentralized AI model marketplace on Solana, verified end-to-end with 42/42 automated tests passing.',
        tags: ['Solana', 'FastAPI', 'Next.js'],
        runtime: 'Dec 2025',
        palette: indigo,
      },
    ],
  },
  {
    number: 4,
    title: 'The Winner’s Arc',
    period: '2026',
    synopsis: 'The breakthrough year — international finals, a hackathon win and a copyright.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The International',
        description: 'PEC HACKS 2.0 — finished top 10 internationally with Serenity, an NLP-based mental-health platform, at PEC College, Tamil Nadu.',
        tags: ['PEC HACKS', 'Top 10', 'NLP'],
        runtime: 'International stage',
        palette: pearl,
      },
      {
        code: 'S04 E02',
        title: 'The Champion',
        description: 'COHERENCE Hackathon 2026 — Winner. Led CogniStream for Team Paradigm, cutting clinical-trial screening from 30+ minutes to under 15 seconds.',
        tags: ['Winner', 'CogniStream', 'Team Paradigm'],
        runtime: 'Mar 2026',
        palette: cyan,
      },
      {
        code: 'S04 E03',
        title: 'The Assistive Original',
        description: 'BrailleVision — offline on-device text detection for visually impaired users, co-authored and registered with the Indian Copyright Office as "Sight Sense".',
        tags: ['YOLOv8', 'Copyright', 'Accessibility'],
        runtime: 'Apr 2026',
        palette: violet,
      },
      {
        code: 'S04 E04',
        title: 'The Graduate',
        description: 'Graduated from the University of Mumbai — Computer Engineering with Honours in AI/ML. Ready for what’s next.',
        tags: ['Graduation', 'Class of 2026'],
        runtime: 'Jun 2026',
        palette: gold,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The newest work and the next arc of the story — shipping, learning and building with LLMs.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'MediScript',
        description: 'The newest Original — live medical transcription with browser Silero VAD, local faster-whisper and an AI clinical summary.',
        tags: ['Whisper', 'Latest'],
        runtime: 'Oct 2026',
        palette: pearl,
      },
      {
        code: 'S05 E02',
        title: 'The Next Chapter',
        description: 'Exploring RAG & LLMs, Computer Vision and Blockchain/Web3 — open to software, AI/ML, data and full-stack roles.',
        tags: ['RAG', 'CV', 'Web3'],
        runtime: 'In production',
        palette: teal,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Hackathon winner', title: 'COHERENCE 2026', detail: 'Led CogniStream for Team Paradigm', palette: cyan },
  { label: 'The assistive Original', title: 'BrailleVision', detail: 'Copyright-registered · fully offline', palette: violet },
  { label: 'On-chain Original', title: 'VAULT', detail: 'Solana marketplace · 42/42 tests', palette: indigo },
  { label: 'Fastest screening', title: '30m → <15s', detail: 'CogniStream clinical-trial matching', palette: pearl },
  { label: 'International stage', title: 'PEC HACKS 2.0', detail: 'Serenity · Top 10 internationally', palette: teal },
  { label: 'Primary language', title: 'Python', detail: 'AI · data · automation · FastAPI', palette: gold },
  { label: 'Full stack', title: 'Next.js + FastAPI', detail: 'Frontend to backend, tested end-to-end', palette: indigo },
  { label: 'On-device AI', title: 'YOLOv8-nano', detail: 'TensorFlow Lite on Android', palette: cyan },
  { label: 'Academic core', title: 'AI/ML Honours', detail: 'CGPA 7.85 · University of Mumbai', palette: violet },
  { label: 'Current focus', title: 'RAG & LLMs', detail: 'Groq · Whisper · vision-language APIs', palette: pearl },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BE · AI/ML Honours',
    lines: ['Vidyavardhini’s College of Engineering and Technology', 'University of Mumbai · July 2022 – June 2026'],
    chips: ['CGPA 7.85'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Next.js, FastAPI, TypeScript · Kotlin, Jetpack Compose', 'TensorFlow, YOLOv8, RAG · Pandas, SQL'],
    chips: ['Python', 'Next.js', 'FastAPI', 'Kotlin', 'TensorFlow', 'RAG'],
  },
  {
    kicker: 'Experience',
    title: 'The Intern Arc',
    lines: ['Web Developer Intern · Acmegrade · Feb – Mar 2024', 'Responsive features · UI performance optimization'],
  },
  {
    kicker: 'Projects',
    title: 'Six Originals',
    lines: ['CogniStream — 30+ min of screening → under 15 seconds', 'BrailleVision — offline YOLOv8 text reading, copyright-registered', 'VAULT — Solana marketplace, 42/42 tests passing'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Winner — COHERENCE Hackathon 2026', 'Top 10 internationally — PEC HACKS 2.0', 'Copyright registered — "Sight Sense"'],
  },
  {
    kicker: 'Certified',
    title: '4 Years, 4 Credentials',
    lines: ['Infosys · Python, Java, DSA', 'AI Engineer Certificate'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['RAG & LLMs · Computer Vision · Blockchain & Web3'],
  },
];

export type ProfileId = 'dhruv' | 'recruiter' | 'fullstack' | 'aiml';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dhruv',
    name: 'Dhruv',
    blurb: 'The full series, in order',
    color: '#2f8bff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#7fd7ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'fullstack',
    name: 'Full-Stack',
    blurb: 'Projects, stack & GitHub first',
    color: '#35d6ff',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'aiml',
    name: 'AI · ML',
    blurb: 'Models, pipelines & research first',
    color: '#3ee6b0',
    order: ['originals', 'moments', 'skills', 'picks', 'about', 'journey', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: gold },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2022 – Now`, palette: cyan },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: teal },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Genres`, palette: indigo },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: pearl },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
