export interface NavItem {
  text: string;
  to?: string;
  children?: NavItem[];
}

export const routesList: NavItem[] = [
  {
    text: 'Sobre mí',
    to: '/#aboutme',
  },
  {
    text: 'Portafolio',
    to: '/#portfolio',
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
];
