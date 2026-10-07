export const personalInfo = {
  name: "Soumesh Mazumdar Sourav",
  shortName: "Soumesh Mazumdar",
  title: "CSE Student | Aspiring Cybersecurity Professional",
  location: "Bangladesh",
  shortIntro: "I build secure web applications and explore cybersecurity, software development, and emerging technologies.",
  about: "I am a Computer Science and Engineering student with a strong passion for cybersecurity, secure software development, and modern web technologies. My focus lies at the intersection of practical software engineering and defense-in-depth principles — building scalable applications with security, data privacy, and clean architecture embedded from the ground up.",
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    status: "Undergraduate Student",
    focus: "Cybersecurity & Software Development",
    location: "Bangladesh"
  },
  socials: {
    github: "https://github.com/infectedsourav",
    linkedin: "https://www.linkedin.com/in/soumesh-mazumdar-b341133a8",
    email: "souravmazumdar45@gmail.com",
    phone: "01631204621",
    phoneFormatted: "+880 1631-204621",
    whatsapp: "https://wa.me/8801631204621",
  }
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "HealNSight",
    title: "HealNSight",
    category: "Secure Telemedicine Platform",
    featured: true,
    description: "A privacy-focused telemedicine platform designed around secure communication, consent-based access and protected patient health records.",
    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "Node.js",
      "WebRTC",
      "PostgreSQL",
      "WebSockets"
    ],
    highlights: [
      "End-to-end encrypted consultations via WebRTC",
      "Role-based access control for patient health data",
      "RESTful API architecture with Django REST Framework"
    ],
    liveUrl: "https://example.com/demo/HealNSight",
    githubUrl: "https://github.com/infectedsourav/HealNSight",
  },
  {
    id: "cybersecurity-project",
    title: "Cybersecurity Project",
    category: "Network & Defensive Security",
    featured: false,
    description: "A practical cybersecurity project focused on networking, security testing and defensive security concepts.",
    technologies: [
      "Linux",
      "Networking",
      "Nmap",
      "Python"
    ],
    highlights: [
      "Network reconnaissance and automated port audit scripts",
      "Vulnerability assessment methodologies in lab environments",
      "Packet inspection and basic defensive configuration"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/infectedsourav/cybersecurity-lab-tools",
  },
  {
    id: "software-dev-project",
    title: "Software Development Project",
    category: "Web Application",
    featured: false,
    description: "A web-based application demonstrating practical software development, API integration and responsive frontend design.",
    technologies: [
      "JavaScript",
      "React",
      "REST API"
    ],
    highlights: [
      "Modular component architecture with responsive layout",
      "Asynchronous state handling with third-party REST APIs",
      "Clean UI feedback, error states, and optimized client rendering"
    ],
    liveUrl: "https://example.com/demo/web-app",
    githubUrl: "https://github.com/infectedsourav/web-app-project",
  }
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "Code2",
    description: "Core languages used for scripting, web development, and problem solving",
    skills: ["Python", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Web Development",
    icon: "Globe",
    description: "Building responsive frontends and structured backend APIs",
    skills: ["React", "Django", "Django REST Framework", "Node.js", "REST APIs"]
  },
  {
    title: "Cybersecurity",
    icon: "ShieldCheck",
    description: "Security foundations, systems exploration, and networking analysis",
    skills: ["Linux", "Networking", "Nmap", "Basic Security Testing", "Web Security Fundamentals"]
  },
  {
    title: "Tools & Workflow",
    icon: "Terminal",
    description: "Version control, development environments, and API tooling",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

export const learningMilestones = [
  {
    period: "Ongoing Focus",
    title: "Cybersecurity Exploration & Security Labs",
    category: "Cybersecurity Learning",
    description: "Practicing defensive security, network auditing, and secure coding practices in hands-on lab environments.",
    topics: [
      "Linux fundamentals & bash scripting",
      "Networking fundamentals (TCP/IP, OSI, subnetting, DNS)",
      "Nmap network discovery & port service enumeration",
      "Security testing basics & OWASP Top 10 awareness"
    ],
    badge: "Active Pursuit"
  },
  {
    period: "Development Journey",
    title: "Full-Stack & Secure Web Engineering",
    category: "Software Development",
    description: "Designing end-to-end web applications with robust architecture, REST APIs, and strict data validation.",
    topics: [
      "Modern React component lifecycle & UI architecture",
      "Django & Django REST Framework backend development",
      "RESTful API design and authentication flows",
      "Collaborative version control with Git & GitHub"
    ],
    badge: "Core Skillset"
  },
  {
    period: "Academic Foundation",
    title: "Computer Science & Engineering Studies",
    category: "Academic Foundation",
    description: "Rigorous coursework establishing theoretical grounding and engineering discipline.",
    topics: [
      "Data Structures & Algorithms",
      "Database Management Systems (PostgreSQL / Relational Models)",
      "Operating Systems & Computer Architecture",
      "Object-Oriented Programming & Software Engineering Principles"
    ],
    badge: "B.Sc. Degree"
  }
];
