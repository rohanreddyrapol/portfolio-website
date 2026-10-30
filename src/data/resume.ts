import type { ImageMetadata } from 'astro';
import anuragLogo from '../assets/logos/anurag-university.png';
import narayanaLogo from '../assets/logos/narayana-junior-college.png';
import chaitanyaLogo from '../assets/logos/sri-chaitanya-high-school.png';
import medicineImage from '../assets/projects/personalized-medicine.png';
import hostingImage from '../assets/projects/aws-static-hosting.png';
import summarizerImage from '../assets/projects/smart-summarizer.png';

export interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  technologies: string[];
  monogram: string;
  tone: 'indigo' | 'blue' | 'violet';
  image: ImageMetadata;
}

export interface Milestone {
  title: string;
  organization: string;
  date?: string;
  detail: string;
  responsibilityGroups?: { title: string; items: string[] }[];
  url?: string;
  institutionLogo?: ImageMetadata;
}

export interface Certification extends Milestone {
  logo: string;
}

export const projects: Project[] = [
  {
    title: 'Personalized Medicine Recommendation System',
    category: 'Machine learning · Health',
    description: 'A machine learning concept for disease prediction and personalized medication, diet, and workout recommendations.',
    details: [
      'Explored Decision Tree and Random Forest models for supervised disease prediction.',
      'Used K-Means and hierarchical clustering to group patients by similar health profiles.',
    ],
    technologies: ['Python', 'Decision Tree', 'Random Forest', 'K-Means', 'Clustering'],
    monogram: '01', tone: 'indigo', image: medicineImage,
  },
  {
    title: 'Automated Static Website Hosting on AWS',
    category: 'Cloud · Infrastructure',
    description: 'A secure static hosting setup with automated delivery and a serverless backend.',
    details: [
      'Configured S3, CloudFront, Route 53, and ACM with IAM roles and HTTPS.',
      'Connected GitHub to AWS CodePipeline for automated deployment updates.',
    ],
    technologies: ['AWS S3', 'CloudFront', 'Route 53', 'ACM', 'CodePipeline', 'GitHub'],
    monogram: '02', tone: 'blue', image: hostingImage,
  },
  {
    title: 'Smart Summarizer',
    category: 'Applied AI · Language',
    description: 'An AI-assisted application that creates structured, multilingual summaries of YouTube videos in more than 12 languages.',
    details: [
      'Integrated Whisper Large V3 Turbo for transcription and Llama 3.1 for summarization.',
      'Used LangChain for text chunking across the summarization flow.',
    ],
    technologies: ['Whisper', 'Llama 3.1', 'LangChain', 'Python'],
    monogram: '03', tone: 'violet', image: summarizerImage,
  },
];

export const experience: Milestone[] = [
  {
    title: 'Cloud Engineer 1 (CE1)',
    organization: 'Insight',
    date: 'Jul 2026 – Present',
    detail: 'Monitor and support Azure cloud infrastructure, service health, and incident response.',
    responsibilityGroups: [
      {
        title: 'Azure Cloud Infrastructure',
        items: [
          'Monitor Azure VMs, CPU, memory, disk, and network performance.',
          'Use Azure Monitor, Metrics, and Log Analytics to investigate issues; review Azure Alerts, Resource Health, and Service Health.',
          'Monitor VNets and NSGs, and troubleshoot connectivity with Network Watcher.',
          'Monitor Storage Accounts, Managed Disks, and backup status; review Azure Backup recovery points and Site Recovery replication health.',
        ],
      },
      {
        title: 'ServiceNow Ticket Management',
        items: [
          'Review, acknowledge, and update incident tickets; track priority, ownership, status, and SLA timelines.',
          'Coordinate with support teams through resolution.',
        ],
      },
      {
        title: 'Troubleshooting and Root Cause Analysis',
        items: [
          'Troubleshoot VM, storage, networking, and performance issues using runbooks and standard operating procedures.',
          'Escalate complex issues to L2/L3 teams and document findings.',
        ],
      },
      {
        title: 'Incident Management',
        items: [
          'Monitor Azure Monitor and Datadog alerts; investigate high CPU, low disk space, VM downtime, and connectivity issues.',
          'Manage priority incidents according to escalation procedures and SLAs.',
        ],
      },
      {
        title: 'Cloud Operations and Service Availability',
        items: [
          'Perform routine infrastructure health checks and maintain cloud availability, reliability, and performance.',
          'Follow change management procedures and identify resource utilization issues and cost optimization opportunities.',
        ],
      },
    ],
  },
  {
    title: 'Launchpad Program Trainee',
    organization: 'PwC (PricewaterhouseCoopers LLP)',
    date: 'Feb – Aug 2024',
    detail: 'Completed a six-month structured Launchpad Development Program focused on business, technology, and professional skills. Earned skill badges in Java, Python, Cloud & DevOps, Cybersecurity, and RDBMS fundamentals.',
  },
];

export const certifications: Certification[] = [
  { title: 'Cyber Risk & Regulatory Launchpad Program', organization: 'PwC', date: 'Jul 29, 2024', detail: 'Professional development program.', url: '/certificates/pwc-cyber-risk-certificate.jpg', logo: '/logos/pwc.svg' },
  { title: 'AWS Academy Graduate', organization: 'AWS Academy', date: 'Sep 2023', detail: 'Cloud Foundations Badge.', url: 'https://www.credly.com/badges/f7329e36-5e3d-4bf8-923b-feef59e13192', logo: '/logos/aws.svg' },
  { title: 'Data Visualisation: Empowering Business with Effective Insights', organization: 'TATA', date: 'Jul 2024', detail: 'Data visualization credential.', logo: '/logos/tata.svg' },
  { title: 'Excel Skills Job Simulation', organization: 'JPMorgan Chase & Co.', date: 'Jul 2024', detail: 'Job simulation.', logo: '/logos/jpmorgan.svg' },
];

export const education: Milestone[] = [
  { title: 'B.Tech, Computer Science & Engineering', organization: 'Anurag University · Hyderabad', date: 'Oct 2021 – May 2025', detail: 'CGPA 9.47 / 10', institutionLogo: anuragLogo },
  { title: 'Intermediate (SSC)', organization: 'Narayana Junior College · Hyderabad', date: 'Jun 2019 – Jun 2021', detail: '98%', institutionLogo: narayanaLogo },
  { title: 'CBSE', organization: 'Sri Chaitanya High School · Hyderabad', date: 'May 2019', detail: '88%', institutionLogo: chaitanyaLogo },
];
