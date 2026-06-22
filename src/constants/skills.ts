export interface Skill {
  title: string;
  src: string;
  iconColor: string;
}

// Primary Skills
export const typescriptSkill: Skill = {
  title: 'TypeScript',
  src: '/svgs/typescript.svg',
  iconColor: 'bg-[#3178C6]',
};

export const javascriptSkill: Skill = {
  title: 'JavaScript',
  src: '/svgs/javascript.svg',
  iconColor: 'bg-[#F7DF1E]',
};

export const reactSkill: Skill = {
  title: 'React',
  src: '/svgs/react.svg',
  iconColor: 'bg-[#61DAFB]',
};

export const reactNativeSkill: Skill = {
  title: 'React Native',
  src: '/svgs/expo.svg',
  iconColor: 'bg-[#FFFFFF]',
};

// Secondary Skills
export const gitSkill: Skill = {
  title: 'Git',
  src: '/svgs/git.svg',
  iconColor: 'bg-[#F05032]',
};

export const githubSkill: Skill = {
  title: 'GitHub',
  src: '/svgs/github.svg',
  iconColor: 'bg-[#FFFFFF]',
};

export const tanstackQuerySkill: Skill = {
  title: 'TanStack Query',
  src: '/svgs/tanstack.svg',
  iconColor: 'bg-[#FF4154]',
};

export const zustandSkill: Skill = {
  title: 'Zustand',
  src: '/svgs/zustand.svg',
  iconColor: 'bg-[#453A34]',
};

export const axiosSkill: Skill = {
  title: 'Axios',
  src: '/svgs/axios.svg',
  iconColor: 'bg-[#5a29e4]',
};

export const nodeJsSkill: Skill = {
  title: 'Node.js',
  src: '/svgs/nodedotjs.svg',
  iconColor: 'bg-[#5FA04E]',
};

export const shadcnUiSkill: Skill = {
  title: 'shadcn/ui',
  src: '/svgs/shadcnui.svg',
  iconColor: 'bg-[#FFFFFF]',
};

export const tailwindCssSkill: Skill = {
  title: 'Tailwind CSS',
  src: '/svgs/tailwindcss.svg',
  iconColor: 'bg-[#06B6D4]',
};

export const expressSkill: Skill = {
  title: 'Express.js',
  src: '/svgs/express.svg',
  iconColor: 'bg-[#E5E5E5]',
};

export const dockerSkill: Skill = {
  title: 'Docker',
  src: '/svgs/docker.svg',
  iconColor: 'bg-[#2496ED]',
};

export const prismaSkill: Skill = {
  title: 'Prisma ORM',
  src: '/svgs/prisma.svg',
  iconColor: 'bg-[#2D3748]',
};

export const postgreSQLSkill: Skill = {
  title: 'PostgreSQL',
  src: '/svgs/postgresql.svg',
  iconColor: 'bg-[#4169E1]',
};

export const cleanCodePrinciple: Skill = {
  title: 'Código Limpio',
  src: '/svgs/prettier.svg',
  iconColor: 'bg-[#00F5D4]',
};

export const performancePrinciple: Skill = {
  title: 'Rendimiento',
  src: '/svgs/zap.svg',
  iconColor: 'bg-[#FF007F]',
};

export const automationPrinciple: Skill = {
  title: 'Automatización',
  src: '/svgs/auto.svg',
  iconColor: 'bg-[#FFB703]',
};

// Grupos
export const primarySkills: Skill[] = [
  typescriptSkill,
  javascriptSkill,
  reactSkill,
  reactNativeSkill,
];

export const secondarySkills: Skill[] = [
  gitSkill,
  githubSkill,
  tanstackQuerySkill,
  zustandSkill,
  axiosSkill,
  nodeJsSkill,
  expressSkill,
  shadcnUiSkill,
  tailwindCssSkill,
  prismaSkill,
];

export const principlesList: Skill[] = [
  cleanCodePrinciple,
  performancePrinciple,
  automationPrinciple,
];
