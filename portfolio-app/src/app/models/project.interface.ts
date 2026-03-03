export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
  type: 'personal' | 'professional' | 'hackathon';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  projects: ExperienceProject[];
  achievements: string[];
  technologies: string[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  highlights: string[];
}

export interface ImpactMetric {
  label: string;
  value: string;
  icon?: string;
  color?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa?: string;
  honors?: string[];
  description?: string;
}
