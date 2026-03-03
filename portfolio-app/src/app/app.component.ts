import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ImpactBarComponent } from './components/impact-bar/impact-bar.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { SkillsMatrixComponent } from './components/skills-matrix/skills-matrix.component';
import { Project, Experience, ImpactMetric, Skill, Education } from './models/project.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    ProjectCardComponent,
    ImpactBarComponent,
    ExperienceCardComponent,
    SkillsMatrixComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Professional Portfolio';
  currentYear = new Date().getFullYear();

  // Impact Metrics
  impactMetrics: ImpactMetric[] = [
    {
      label: 'Admin Overhead Reduction',
      value: '15%',
      icon: '📊',
      color: 'emerald'
    },
    {
      label: 'Transaction Time Reduction',
      value: '9%',
      icon: '⚡',
      color: 'emerald'
    },
    {
      label: 'Client Acquisition Increase',
      value: '10%',
      icon: '📈',
      color: 'emerald'
    }
  ];

  // Experience
  experience: Experience = {
    id: 'geekywolf',
    company: 'GeekyWolf',
    role: 'Software Engineer',
    duration: '2023 - 2025',
    location: 'Trivandrum, India',
    description: 'Leading development of scalable financial platforms and microservices architecture, with a focus on payment processing systems and event-driven solutions.',
    projects: [
      {
        name: 'ControlQore Payment Engine',
        description: 'Architected and developed a comprehensive payment processing system with multi-vendor batch processing capabilities.',
        highlights: [
          'Integrated Stripe and Forward APIs for seamless payment processing',
          'Implemented multi-vendor batch processing reducing transaction time by 9%',
          'Designed RESTful APIs following SOLID principles and clean architecture',
          'Built real-time payment tracking and reconciliation system'
        ]
      }
    ],
    achievements: [
      'Architected microservices using CQRS pattern, gRPC, and event-driven architecture',
      'Reduced administrative overhead by 15% through process automation',
      'Led code reviews and mentored 3 junior engineers in OOP principles and clean coding practices',
      'Increased client acquisition by 10% through improved system reliability and performance',
      'Implemented comprehensive unit testing achieving 85%+ code coverage'
    ],
    technologies: [
      'C#', '.NET Framework', 'EF Core', 'Web API', 'SQL Server',
      'Microservices', 'CQRS', 'gRPC', 'Event-Driven Architecture',
      'Angular', 'TypeScript', 'RESTful APIs', 'Docker', 'Azure'
    ]
  };

  // Technical Projects
  projects: Project[] = [
    {
      id: 'ai-finance-coach',
      title: 'Personal AI Finance Coach',
      subtitle: 'AI-Driven Personal Finance Assistant',
      description: 'An intelligent financial planning application that leverages AI to provide personalized financial advice, budget tracking, and investment recommendations.',
      technologies: ['Python', 'Pandas', 'Gemini API'],
      highlights: [
        'Built using BMad (AI-driven agile) methodology for rapid development',
        'Implements natural language processing for financial query understanding',
        'Provides personalized budget recommendations based on spending patterns',
        'Real-time expense tracking and categorization',
        'Integration with Gemini API for intelligent financial insights'
      ],
      type: 'personal'
    },
    {
      id: 'brokee',
      title: 'Brokee',
      subtitle: '2nd Place - Hackathon Winner',
      description: 'A gamified investing platform MVP that makes learning about investments engaging and accessible for beginners through interactive challenges and simulations.',
      technologies: ['Github Copilot', 'React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      highlights: [
        'Secured 2nd place in competitive hackathon',
        'Delivered complete end-to-end product vision in 48 hours',
        'Implemented gamification mechanics to drive user engagement',
        'Built real-time stock market simulation engine',
        'Created intuitive onboarding flow for investment beginners'
      ],
      type: 'hackathon'
    }
  ];

  // Hard Skills Matrix
  skills: Skill[] = [
    {
      category: 'Backend Development',
      skills: ['C#', '.NET Framework', 'EF Core', 'Web API', 'SQL Server', 'Microservices', 'RESTful APIs']
    },
    {
      category: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'HTML/CSS', 'Component-Based Architecture', 'RxJS', 'Tailwind CSS']
    },
    {
      category: 'Architecture & Design',
      skills: ['CQRS', 'Event-Driven Architecture', 'gRPC', 'SOLID Principles', 'Clean Architecture', 'Domain-Driven Design']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'Azure Services', 'Git', 'CI/CD', 'Azure DevOps']
    },
    {
      category: 'Data & AI',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Gemini API', 'Data Analysis']
    },
    {
      category: 'Database',
      skills: ['SQL Server', 'Entity Framework', 'Database Design', 'Query Optimization']
    }
  ];

  // Education
  education: Education[] = [
    {
      degree: 'MSc Management of Information Systems and Digital Innovation',
      institution: 'Warwick Business School',
      duration: '2025 - 2026',
      location: 'Coventry, United Kingdom',
      description: 'Specialized in digital transformation, management of information systems, and technology-driven business innovation.'
    },
    {
      degree: 'BTech in Computer Science Engineering',
      institution: 'Dr APJ Abdul Kalam Technical University',
      duration: '2019 - 2023',
      location: 'India',
      gpa: '9.33/10',
      honors: ['Honours in Machine Learning'],
      description: 'Focus on software engineering, algorithms, and machine learning with outstanding academic performance.'
    }
  ];
}
