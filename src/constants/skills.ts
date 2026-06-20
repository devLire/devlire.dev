export interface Skill {
  title: string;
  src: string;
  iconColor: string;
}

export const primarySkills: Skill[] = [
  {
    title: 'TypeScript',
    src: '/svgs/typescript.svg',
    iconColor: 'bg-[#3178C6]',
  },
  {
    title: 'JavaScript',
    src: '/svgs/javascript.svg',
    iconColor: 'bg-[#F7DF1E]',
  },
  {
    title: 'React',
    src: '/svgs/react.svg',
    iconColor: 'bg-[#61DAFB]',
  },
  {
    title: 'React Native',
    src: '/svgs/expo.svg',
    iconColor: 'bg-[#FFFFFF]',
  },
];

export const secondarySkills: Skill[] = [
  {
    title: 'Git',
    src: '/svgs/git.svg',
    iconColor: 'bg-[#F05032]',
  },
  {
    title: 'GitHub',
    src: '/svgs/github.svg',
    iconColor: 'bg-[#FFFFFF]',
  },
  {
    title: 'TanStack Query',
    src: '/svgs/tanstack.svg',
    iconColor: 'bg-[#FF4154]',
  },
  {
    title: 'Zustand',
    src: '/svgs/zustand.svg',
    iconColor: 'bg-[#453A34]',
  },
  {
    title: 'Axios',
    src: '/svgs/axios.svg',
    iconColor: 'bg-[#5a29e4]',
  },
  {
    title: 'Node.js',
    src: '/svgs/nodedotjs.svg',
    iconColor: 'bg-[#5FA04E]',
  },
  {
    title: 'shadcn/ui',
    src: '/svgs/shadcnui.svg',
    iconColor: 'bg-[#FFFFFF]',
  },
  {
    title: 'Tailwind CSS',
    src: '/svgs/tailwindcss.svg',
    iconColor: 'bg-[#06B6D4]',
  },
];
