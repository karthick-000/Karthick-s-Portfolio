import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  BrainCircuit,
  ShieldCheck,
  GitFork,
  Smartphone,
  Server,
  Database,
  Code,
  Linkedin,
  Mail,
  Phone,
  Github,
} from 'lucide-react';
import type { StaticImageData } from 'next/image';

export const contactDetails = {
  email: 'karthickraja1259@gmail.com',
  phone: '+91 9943151259',
  address: '56A Subramaniya Puram Street, Near Velavan Stores, Thoothukudi-2',
  linkedin: 'https://linkedin.com/in/karthick-raja-m-999006266',
};

export const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#internships', label: 'Internships'},
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  name: 'Karthick Raja M',
  title: 'AI & Data Science Engineer',
  tagline: 'Developing intelligent, real-time automation solutions with AI and IoT.',
};

export const aboutData = {
  careerObjective: 'Apply Artificial Intelligence and Data Science in IoT-based systems to develop intelligent, real-time automation solutions. Focus on integrating machine learning and edge computing to drive smart decision-making.',
};

export const skills = {
  technical: [
    { title: 'My Technical Toolkit', description: 'Highlights the range of tools and technologies you are proficient in.' },
    { title: 'Tech Stack & Tools', description: 'Emphasizes the specific technologies and tools you utilize in your work.' },
    { title: 'Skills & Technologies', description: 'A straightforward title that covers both your skills and the technologies you work with.' },
    { title: 'Development Expertise', description: 'Focuses on your proficiency in development and programming.' },
    { title: 'Core Competencies', description: 'Showcases your fundamental skills and areas of expertise.' },
    { title: 'Technical Proficiencies', description: 'A professional term for your technical skills and knowledge.' },
    { title: 'What I Work With', description: 'A casual and approachable way to present your technical skills.' },
    { title: 'Tools of the Trade', description: 'Highlights the specific tools you use in your professional work.' },
    { title: 'Tech Skills & Tools', description: 'Combines both your technical skills and the tools you are proficient in.' },
    { title: 'Tech Stack & Expertise', description: 'Emphasizes both the technologies you use and your expertise in them.' },
  ],
  personal: [
    { name: 'Teamwork', icon: Users },
    { name: 'Critical Thinking', icon: BrainCircuit },
    { name: 'Responsibility', icon: ShieldCheck },
    { name: 'Flexibility', icon: GitFork },
  ],
  languages: ['Tamil', 'English', 'Hindi'],
};

export const projects = [
  {
    title: 'Solar Powered Drone',
    description: 'A self-charging drone that utilizes solar power to extend flight time.',
    imagePlaceholderId: 'project-drone',
  },
  {
    title: 'Seoul Bike Trip Duration Prediction',
    description: 'Used EDA in Data Science to predict bike trip durations in Seoul.',
    imagePlaceholderId: 'project-bike',
  },
  {
    title: 'Course Registration System',
    description: 'Developed a course registration system using Queue method in Data Structures.',
    imagePlaceholderId: 'project-course',
  },
  {
    title: 'Face Recognition System',
    description: 'Built a face recognition system using Local Binary Patterns Histogram.',
    imagePlaceholderId: 'project-face',
  },
  {
    title: 'Streamed Video Streaming Site',
    description: 'A database-oriented video streaming platform.',
    imagePlaceholderId: 'project-video',
  },
  {
    title: 'Self-Driving Car Prototype',
    description: 'A prototype with both automatic and manual driving modes.',
    imagePlaceholderId: 'project-self-driving',
  },
  {
    title: 'Real-time Self-Driving Car Prototype',
    description: 'Ongoing project to develop a real-time autonomous vehicle.',
    imagePlaceholderId: 'project-real-time-car',
  },
];

export const workExperience = [
  {
    role: 'Trainee',
    company: 'ZF Rane Automotive India Pvt Ltd',
    period: 'Jul 2022 – Aug 2023',
    icon: Briefcase,
  },
];

export const internships = [
  {
    title: 'InternIQ (Online Internship)',
    subtitle: 'Python Development Projects',
    period: '2022 – 2023',
    description: [
      'Worked on multiple Python-based projects, enhancing programming and problem-solving skills.',
      'Gained practical experience in applying Python to real-world use cases.',
      'Explored data handling, automation, and application development.',
    ],
    icon: Briefcase,
    certificateUrl: '#',
  },
  {
    title: 'Real-time Self-Driving Car Prototype (Project Internship)',
    subtitle: 'National Engineering College – AI & DS Department',
    period: '2024 – 2025 (Ongoing)',
    description: [
      'Building a real-time autonomous car prototype using microcontrollers and sensors.',
      'Integrated AI models for object detection and decision-making.',
      'Hands-on experience in IoT, embedded systems, and AI-powered robotics.',
    ],
    icon: Briefcase,
    certificateUrl: '#',
  }
];

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'National Engineering College, Kovilpatti',
    period: '2023 – Present',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: 'Jayaraj Annapackiam CSI Polytechnic College, Nazareth',
    period: '2019 – 2022',
    details: '82.5%',
    icon: GraduationCap,
  },
  {
    degree: 'SSLC',
    institution: 'Star Matric Higher Secondary School',
    period: '2018 – 2019',
    details: '62.4%',
    icon: GraduationCap,
  },
];

export const certifications = [
  { name: 'Introduction to IoT (NPTEL)', icon: Award, certificateUrl: '#' },
  { name: 'E-Business (NPTEL)', icon: Award, certificateUrl: '#' },
  { name: 'Introduction to Industry 4.0 (NPTEL)', icon: Award, certificateUrl: '#' },
  { name: 'Cloud Computing (NPTEL)', icon: Award, certificateUrl: '#' },
  { name: 'Database Management System (Infosys Springboard)', icon: Award, certificateUrl: '#' },
];

export const socialLinks = [
    { name: 'LinkedIn', url: contactDetails.linkedin, icon: Linkedin },
    { name: 'Email', url: `mailto:${contactDetails.email}`, icon: Mail },
    { name: 'Phone', url: `tel:${contactDetails.phone}`, icon: Phone },
];

export const resumeDataForAI = {
  careerObjective: aboutData.careerObjective,
  workExperience: workExperience.map(e => `${e.role} at ${e.company} (${e.period})`).join('\n'),
  projects: projects.map(p => `${p.title}: ${p.description}`).join('\n'),
  education: education.map(e => `${e.degree} from ${e.institution} (${e.period})`).join('\n'),
  skills: `Technical: ${skills.technical.map(s => s.title).join(', ')}. Personal: ${skills.personal.map(s => s.name).join(', ')}.`,
  certifications: certifications.map(c => c.name).join(', '),
};
