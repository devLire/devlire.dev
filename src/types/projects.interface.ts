import type { Skill } from '@/constants/skills';

export interface ProjectSection {
  id: string;
  tabTitle: string;
  title: string;
  subtitle: string;
  description: string;
  badges: Skill[];
  highlights: { title: string; desc: string }[];
}

export interface Project {
  title: string;
  description: string;
  src: string;
  skills: Skill[];
  hasNDA: boolean;
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
