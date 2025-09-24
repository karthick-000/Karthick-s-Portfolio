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
  Library,
  Wrench,
  Codepen,
  Layers,
  Swords,
  Star,
  Camera,
  Bot,
  Clock,
} from 'lucide-react';
import type { StaticImageData } from 'next/image';
import { InstagramIcon } from '@/components/icons/instagram';
import { WhatsappIcon } from '@/components/icons/whatsapp';
import { GmailIcon } from '@/components/icons/gmail';
import interests from './interests.json';


export const contactDetails = {
  email: 'karthickraja1259@gmail.com',
  phone: '+91 9943151259',
  address: '56A Subramaniya Puram Street, Near Velavan Stores, Thoothukudi-2',
  linkedin: 'https://linkedin.com/in/karthick-raja-m-999006266',
  github: 'https://github.com/karthick-000',
  instagram: 'https://www.instagram.com/____lonely_boi____/',
  whatsapp: 'https://wa.me/919943151259'
};

export const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#internships', label: 'Internships'},
  { href: '#workshops', label: 'Workshops' },
  { href: '#interests', label: 'Interests' },
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
    { 
      title: 'Frontend',
      icon: Codepen,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Python', 'Flask', 'MySQL', 'Java', 'DBMS'],
    },
    {
      title: 'Libraries',
      icon: Layers,
      skills: ['Scikit-learn', 'Numpy', 'Pandas', 'Matplotlib', 'OpenCV', 'TensorFlow'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'Power BI'],
    },
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
    codeUrl: 'https://docs.google.com/document/d/1p205EW9GBCS53FhjN6AEMofGKil4D2bX/edit?usp=sharing&ouid=117325229226838371507&rtpof=true&sd=true',
    demoUrl: '#',
  },
  {
    title: 'Seoul Bike Trip Duration Prediction',
    description: 'Used EDA in Data Science to predict bike trip durations in Seoul.',
    imagePlaceholderId: 'project-bike',
    codeUrl: 'https://docs.google.com/document/d/1xUk6MqAP50q7rjJq_eOVeuGAw1w5CSDG/edit?usp=sharing&ouid=104635920535089063041&rtpof=true&sd=true',
    demoUrl: '#',
  },
  {
    title: 'Course Registration System',
    description: 'Developed a course registration system using Queue method in Data Structures.',
    imagePlaceholderId: 'project-course',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Face Recognition System',
    description: 'Built a face recognition system using Local Binary Patterns Histogram.',
    imagePlaceholderId: 'project-face',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Streamed Video Streaming Site',
    description: 'A database-oriented video streaming platform.',
    imagePlaceholderId: 'project-video',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Self-Driving Car Prototype',
    description: 'A prototype with both automatic and manual driving modes.',
    imagePlaceholderId: 'project-self-driving',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Real-time Self-Driving Car Prototype',
    description: 'Ongoing project to develop a real-time autonomous vehicle.',
    imagePlaceholderId: 'project-real-time-car',
    codeUrl: '#',
    demoUrl: '#',
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
    certificateUrl: 'https://drive.google.com/file/d/1YImsA3wqA0-XNJhyXDDhq3v-oXT2cACv/view?usp=sharing',
  },
  {
    title: 'Real-time Self-Driving Car Prototype (Project Internship)',
    subtitle: 'MIstral Solutions Pvt Ltd, Kovilpatti',
    period: '2024 – 2025',
    description: [
      'Building a real-time autonomous car prototype using microcontrollers and sensors.',
      'Integrated AI models for object detection and decision-making.',
      'Hands-on experience in IoT, embedded systems, and AI-powered robotics.',
    ],
    icon: Briefcase,
    certificateUrl: 'https://drive.google.com/file/d/1xEMn2zyhMGpcWL9gwmMyix6C7yFiiWnv/view?usp=sharing',
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
  { name: 'Introduction to IoT (NPTEL)', icon: Award, certificateUrl: 'https://drive.google.com/file/d/1bqrbhU46jgAgbMopjEXos4v1pIviUaR4/view?usp=sharing' },
  { name: 'E-Business (NPTEL)', icon: Award, certificateUrl: 'https://drive.google.com/file/d/1ennSMyksvn33ugGB9X4e0aWS-z9R2kPF/view?usp=sharing' },
  { name: 'Introduction to Industry 4.0 (NPTEL)', icon: Award, certificateUrl: 'https://drive.google.com/file/d/1VOsGOVe-7PuRI9gsa8m3djwDRvKiSQMN/view?usp=sharing' },
  { name: 'Cloud Computing (NPTEL)', icon: Award, certificateUrl: 'https://drive.google.com/file/d/1ZgBbLzNLwz7QgpnRt8qeAvLxI87X3qVb/view?usp=sharing' },
  { name: 'Business Intelligence and Analytics (NPTEL)', icon: Award, certificateUrl: 'https://drive.google.com/file/d/1-iwx0f993hYKIrSzhccXHaNkd2v-bvZb/view?usp=drive_link' },
  { name: 'Technical English for Engineers (NPTEL)', icon: Award, certificateUrl: 'https://drive.google.com/file/d/1k23hgMZGd2fDGjRstbF4DIT5vNQ7pj4S/view?usp=sharing' },
  { name: 'Java Programming', icon: Award, certificateUrl: '#' },
  { name: 'Database Management System (Infosys Springboard)', icon: Award, certificateUrl: '#' },
];

export const achievements = [
    {
        category: 'Competitions',
        icon: Swords,
        items: [
            'Fin-Tech-thon – NIT Trichy',
            'Innovators challenge in Mistral Solutions pvt ltd, II runner',
        ],
    },
    {
        category: 'Leadership',
        icon: Star,
        items: [
            'Rotaract Club – Department Co-ordinator',
        ],
    },
     {
        category: 'Participations',
        icon: Users,
        items: [
            'RYLA - Rotract club - participations',
            'Analytiq Quest - participations',
        ],
    },
];

export const workshops = [
  {
    title: 'Introduction to Computer Vision with Python',
    institution: 'PSG College of Technology, Coimbatore',
    duration: '2 Days',
    icon: Camera,
  },
  {
    title: 'Robot-As-A-Service (RAAS) with IOT',
    institution: 'NIT, Trichy',
    duration: '1 Day',
    icon: Bot,
  }
];

export const socialLinks = [
    { name: 'LinkedIn', url: contactDetails.linkedin, icon: Linkedin },
    { name: 'Gmail', url: `mailto:${contactDetails.email}`, icon: GmailIcon },
    { name: 'Phone', url: `tel:${contactDetails.phone}`, icon: Phone },
    { name: 'GitHub', url: contactDetails.github, icon: Github },
    { name: 'WhatsApp', url: contactDetails.whatsapp, icon: WhatsappIcon },
    { name: 'Instagram', url: contactDetails.instagram, icon: InstagramIcon },
];

export const heroSocialLinks = [
    { name: 'LinkedIn', url: contactDetails.linkedin, icon: Linkedin },
    { name: 'Gmail', url: `mailto:${contactDetails.email}`, icon: GmailIcon },
    { name: 'WhatsApp', url: contactDetails.whatsapp, icon: WhatsappIcon },
    { name: 'GitHub', url: contactDetails.github, icon: Github },
    { name: 'Instagram', url: contactDetails.instagram, icon: InstagramIcon },
];

export const resumeDataForAI = {
  careerObjective: aboutData.careerObjective,
  workExperience: workExperience.map(e => `${e.role} at ${e.company} (${e.period})`).join('\n'),
  projects: projects.map(p => `${p.title}: ${p.description}`).join('\n'),
  education: education.map(e => `${e.degree} from ${e.institution} (${e.period})`).join('\n'),
  skills: `Technical: ${skills.technical.map(s => s.title).join(', ')}. Personal: ${skills.personal.map(s => s.name).join(', ')}.`,
  certifications: certifications.map(c => c.name).join(', '),
};

export const interestsData = interests.interests;
