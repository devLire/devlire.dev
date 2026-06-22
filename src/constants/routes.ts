export interface NavItem {
  text: string;
  to?: string;
  children?: NavItem[];
}

export const routesList: NavItem[] = [
  {
    text: 'Inicio',
    to: '/',
  },
  {
    text: 'Habilidades',
    to: '/#skills',
  },
  {
    text: 'Proyectos',
    children: [
      {
        text: 'TechLogistics',
        to: '/projects/techlogistics',
      },
    ],
  },
  {
    text: 'Sobre mí',
    to: '/#about-me',
  },
  {
    text: 'Educación y Certificados',
    to: '/#education-and-certifications',
  },
];
