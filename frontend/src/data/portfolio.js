export function portfolioFileUrl(filename) {
  if (!filename) return null;
  return "/files/" + encodeURIComponent(filename);
}

export const PERSONAL = {
  name: "Maram Alhusami",
  initials: "MA",
  title: "AI & Cybersecurity Specialist | Computer Science Student",
  tagline:
    "Building intelligent, real-world solutions using AI, automation, and modern technologies.",
  phone: "+966 545 422 192",
  email: "alhusamimaro@gmail.com",
  linkedin: "https://www.linkedin.com/in/maram-alhusami",
};

export const ABOUT = `I am a Computer Science student with a GPA of 3.96, specializing in the AI and Cybersecurity track. I am passionate about building intelligent systems and solving real-world problems using modern technologies. I continuously explore new tools and approaches to develop efficient, secure, and scalable solutions.`;

export const EXPERIENCE = [
  {
    role: "AI & Web Development Intern",
    company: "WOW Digital Information Technology",
    period: "Summer Internship",
    bullets: [
      "Designed and developed 5 AI-powered company websites",
      "Built web applications using Frappe and mobile apps using Flutter",
      "Automated workflows using n8n and Zapier",
    ],
    certificate: {
      url: portfolioFileUrl("wow_digital_intern.pdf"),
      title: "WOW Digital Information Technology — Internship Certificate",
    },
  },
  {
    role: "Technical Specialist (Short-Term)",
    company: "SAG TECH",
    period: "Short-Term",
    bullets: [
      "Supported Monshaat Virtual Lab operations and submissions",
      "Researched AI tools and automation solutions",
      "Developed a company website using AI tools",
      "Delivered the first working draft in under 24 hours",
    ],
    certificate: {
      url: portfolioFileUrl("sag_tech.pdf"),
      title: "SAG TECH — Technical Specialist Certificate",
    },
  },
  {
    role: "Software Engineer Intern",
    company: "Red Sand Technology",
    period: "COOP",
    bullets: [
      "Designed UI/UX prototypes using Figma",
      "Developed a mobile app using Flutter",
      "Integrated Firebase backend services",
      "Published the app on Google Play",
      "Used Postman for API testing and GitHub for version control",
    ],
    certificate: null,
  },
];

export const FEATURED_PROJECT = {
  slug: "deepxpose",
  title: "DeepXpose: Transformer-Based Deepfake Video Detection",
  subtitle:
    "AI-powered detection of manipulated videos using the TALLSwin Transformer architecture.",
  problem:
    "The rise of AI-generated deepfake videos poses a serious threat to digital trust, cybersecurity, journalism, and online verification. Existing detection methods often struggle with accuracy, scalability, and performance when analyzing compressed or low-quality videos. As deepfake technology becomes more sophisticated, there is a growing need for reliable and practical detection systems.",
  solution:
    "DeepXpose is a transformer-based deepfake detection platform built using the TALLSwin architecture. The system extracts and preprocesses video frames, captures both spatial and temporal manipulation patterns, and classifies videos as real or fake. The platform also includes secure authentication, video upload and analysis, automated confidence scoring, and report generation.",
  outcome:
    "Developed a complete end-to-end deepfake detection system integrating artificial intelligence, video processing, backend services, and a modern web interface. The final system demonstrated strong detection performance on unseen data and validated the effectiveness of transformer-based architectures for real-world deepfake detection.",
  contribution: [
    "Conducted literature review and technology evaluation",
    "Designed the system architecture and workflow",
    "Developed the frontend user interface",
    "Implemented backend APIs and database integration",
    "Built the video preprocessing pipeline",
    "Participated in model training, fine-tuning, and evaluation",
    "Integrated authentication and security features",
    "Contributed to testing, deployment, and project documentation",
  ],
  tools: [
    "Python",
    "PyTorch",
    "OpenCV",
    "FFmpeg",
    "Flask",
    "React",
    "SQLite",
    "SQLAlchemy",
    "JWT",
    "Pandas",
    "Scikit-learn",
    "Bootstrap",
    "JavaScript",
    "CUDA",
  ],
  overview:
    "DeepXpose is a full-stack AI-powered platform that detects manipulated videos using the TALLSwin Transformer architecture. The system processes uploaded videos through a preprocessing pipeline, extracts meaningful spatial and temporal features, and generates a confidence-based prediction indicating whether the content is authentic or manipulated. The project combines machine learning, computer vision, cybersecurity, and modern web technologies to address the growing challenge of deepfake media.",
  features: [
    "Secure user authentication and account management",
    "Video upload and deepfake analysis",
    "Transformer-based deepfake detection engine",
    "Automated confidence scoring",
    "Detailed detection reports",
    "Model training and evaluation pipeline",
    "Database-backed user and result management",
    "Scalable full-stack architecture",
  ],
  technologies: {
    Frontend: ["React", "JavaScript", "Bootstrap", "HTML", "CSS"],
    Backend: ["Flask", "SQLAlchemy", "JWT Authentication"],
    "AI & Machine Learning": ["PyTorch", "Torchvision", "TALLSwin Transformer"],
    "Computer Vision": ["OpenCV", "FFmpeg", "Pillow"],
    Database: ["SQLite"],
    "Data Processing": ["Pandas", "NumPy", "Scikit-learn"],
    "Hardware Acceleration": ["CUDA GPU Support"],
  },
  github: "https://github.com/alhusamimm/deepxpose-website",
  demo: "https://deepxpose-website.vercel.app",
};

export const LIVE_PROJECTS = [
  {
    title: "WOW PACS / RIS",
    subtitle: "Integrated DICOM Imaging & Radiology Management System",
    description:
      "Developed a medical imaging platform for handling DICOM data and improving radiology workflows.",
    role: "Web Developer",
    url: "https://portfolio.wowit.sa/wow_pacs/",
    accent: "from-[#002d67] to-[#00D1FF]",
  },
  {
    title: "WOW KVM",
    subtitle: "Secure Out-of-Band Server Access",
    description:
      "Built a remote server access system for reliable infrastructure management.",
    role: "Web Developer",
    url: "https://portfolio.wowit.sa/kvm/",
    accent: "from-[#00377e] to-[#7dd3fc]",
  },
  {
    title: "WOW Meeting",
    subtitle: "Secure & Smart Virtual Meeting Platform",
    description:
      "Developed a secure and modern virtual meeting system for collaboration.",
    role: "Web Developer",
    url: "https://portfolio.wowit.sa/meeting/",
    accent: "from-[#00D1FF] to-[#00377e]",
  },
  {
    title: "WOW Family System",
    subtitle: "Smart Management for Modern Families",
    description:
      "Created a system to manage family activities and communication.",
    role: "Web Developer",
    url: "https://portfolio.wowit.sa/families/",
    accent: "from-[#7dd3fc] to-[#002d67]",
  },
  {
    title: "EBC Website",
    subtitle: "Educational & Business Consulting Platform",
    description:
      "Designed and developed a complete bilingual website featuring modern UI/UX, responsive design, certificate management, dynamic content sections, and scalable architecture for future CMS integration.",
    role: "Full-Stack Web Developer & UI/UX Designer",
    url: "https://ebc-website-five.vercel.app/",
    accent: "from-[#002d67] to-[#0E7490]",
  },
  {
    title: "MATCHY Uniforms",
    subtitle: "Custom Uniforms & Embroidery E-Commerce Platform",
    description:
      "Spearheading the complete development and technical strategy of a bilingual e-commerce platform for a Saudi custom uniforms and embroidery brand. Responsible for business requirements analysis, user experience design, system architecture, payment and logistics solution evaluation, frontend development, backend planning, and deployment strategy.",
    role: "Lead Full-Stack Developer",
    url: null,
    inDevelopment: true,
    accent: "from-[#0E7490] to-[#002d67]",
  },
];

export const OTHER_PROJECTS = [
  {
    title: "Deepfake Video Detection Website",
    description:
      "ML-based web app that analyzes uploaded videos and predicts authenticity using a trained CNN model.",
    tech: ["Python", "TensorFlow", "Flask", "OpenCV"],
    github: "https://github.com/alhusamimm/deepxpose-website",
    demo: "#",
  },
  {
    title: "Deepfake Text Detection System",
    description:
      "NLP pipeline that classifies text as human-written or AI-generated using transformer embeddings.",
    tech: ["Python", "Transformers", "Scikit-learn", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Encryption Tool with GUI",
    description:
      "Cryptography desktop app for symmetric and asymmetric encryption with a clean graphical interface.",
    tech: ["Python", "Tkinter", "Cryptography"],
    github: "#",
    demo: "#",
  },
  {
    title: "Credit Card Offers Management System",
    description:
      "Full-stack web system to manage, filter, and serve credit card promotions to end users.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "#",
    demo: "#",
  },
];

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    group: "Web",
    items: ["HTML", "CSS", "PHP", "Bootstrap"],
  },
  {
    group: "AI & Data",
    items: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    group: "Tools",
    items: ["Flutter", "Firebase", "Frappe", "GitHub", "Postman"],
  },
];

export const AWARDS = [
  {
    title: "1st Place – Undergraduate Research Forum",
    year: "2024",
  },
  {
    title: "1st Place – German Day Projects Competition",
    year: "2023",
  },
  {
    title: "Dean's List",
    year: "Multiple Years",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Digital Portfolio Building Workshop",
    organization: "Effat University",
    date: "November 2025",
    description:
      "Participated in a hands-on workshop focused on building and publishing professional digital portfolios using modern web technologies. Also contributed to organizing the event through IEEE activities.",
    url: "/files/workshop_effat.pdf",
    tag: "Workshop",
  },
  {
    title: "Cybersecurity Awareness Training",
    organization: "Cedge",
    date: "October 2025",
    description:
      "Co-delivered an online cybersecurity awareness training session for company employees. Educated participants on social engineering attacks and cybersecurity best practices while contributing to a stronger information security culture within the organization.",
    url: "/files/cedge_cybersecurity.pdf",
    tag: "Training",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "Coursera",
    date: "2024",
    description:
      "Foundations of Artificial Intelligence — core concepts, applications, and the AI landscape, including how AI is transforming industries and everyday workflows.",
    url: "/academic_files/ai/Coursera%20Certificates/Coursera%20Introduction%20to%20Artificial%20Intelligence%20(AI).pdf",
    tag: "Course",
  },
  {
    title: "Generative AI: Introduction and Applications",
    organization: "Coursera",
    date: "2024",
    description:
      "Introduction to generative AI models, real-world applications, and practical use cases across text, image, and code generation.",
    url: "/academic_files/ai/Coursera%20Certificates/Generative%20AI%20Introduction%20and%20Applications.pdf",
    tag: "Course",
  },
];

export const COURSES = [
  {
    name: "Artificial Intelligence",
    description:
      "Search algorithms, knowledge representation, and intelligent agents.",
  },
  {
    name: "Machine Learning",
    description:
      "Supervised & unsupervised learning, model evaluation, and feature engineering.",
  },
  {
    name: "Cybersecurity Fundamentals",
    description:
      "Threats, defenses, secure design, and risk management foundations.",
  },
  {
    name: "Cryptography",
    description:
      "Symmetric / asymmetric primitives, hashing, and protocol design.",
  },
  {
    name: "Database Systems",
    description:
      "Relational modeling, SQL, transactions, and normalization.",
  },
  {
    name: "Software Engineering",
    description:
      "Lifecycle, design patterns, agile methods, and quality assurance.",
  },
];

export const INTERESTS = [
  "AI in cybersecurity",
  "Automation systems",
  "Smart applications",
];

export const LEARNING = [
  "Advanced Machine Learning",
  "Cybersecurity threat detection",
  "Cloud integration",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Featured", href: "#featured" },
  { label: "Live", href: "#live" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Research", href: "#research" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];
