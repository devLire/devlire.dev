import type { Skill } from '@/constants/skills';

export interface ProjectOverview {
  id: string;
  tabTitle: string;
  summary: string;
  objective: string;
  duration: {
    total?: string;
    period: string;
  };
  roles: {
    area: string;
    description: string;
  }[];
}

export interface ProjectSection {
  id: string;
  tabTitle: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  isMobileView: boolean;
  badges: Skill[];
  highlights: { title: string; desc: string }[];
}

export interface Project {
  title: string;
  description: string;
  src: string;
  skills: Skill[];
  hasNDA: boolean;
  overview?: ProjectOverview;
  sections?: ProjectSection[];
  links?: {
    github?: string;
    demo?: string;
    projectPage?: string;
    credentials?: {
      user: string;
      pass: string;
    };
  };
}
