export interface NavItem {
  text: string;
  to?: string;
  children?: NavItem[];
}

export const routesList: NavItem[] = [
  {
    text: 'Inicio',
    to: '/#inicio',
  },
  {
    text: 'Portafolio',
    to: '/#portafolio',
  },
  {
    text: 'Proyectos',
    children: [
      {
        text: 'TechLogistics',
        to: '/proyectos/techlogistics',
      },
    ],
  },
  {
    text: 'Sobre mí',
    to: '/sobremi',
  },
];
