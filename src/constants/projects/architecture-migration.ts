import type { Project } from '@/types/projects.interface';

import {
  axiosSkill,
  typescriptSkill,
  zustandSkill,
  reactSkill,
} from '../skills';

export const architectureMigrationProject: Project = {
  title: 'Migración de Arquitectura & Optimización de Estado',
  description:
    'Eliminé la deuda técnica de un sistema migrando más de 400 peticiones crudas de JavaScript Fetch hacia una arquitectura centralizada con Axios, Zustand y variables de entorno. Con esto mejoré drásticamente la consistencia de los datos, el rendimiento de la aplicación y facilitó la gestión de múltiples entornos de desarrollo.',
  skills: [reactSkill, typescriptSkill, zustandSkill, axiosSkill],
  src: '/svgs/refactor.svg',
  hasNDA: true,
};
