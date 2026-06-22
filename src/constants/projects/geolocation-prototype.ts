import type { Project } from '@/types/projects.interface';

import { reactSkill, typescriptSkill, zustandSkill } from '../skills';

export const geolocationPrototypeProject: Project = {
  title: 'Prototipo Funcional de Geolocalización',
  description:
    'Desarrollé el MVP móvil de una aplicación de control de asistencia utilizando React Native CLI. Implementé la integración nativa con la API de localización del dispositivo y diseñé un sistema de validación estricta de permisos en tiempo real. El software se consolidó como un prototipo funcional de UI/UX.',
  skills: [reactSkill, typescriptSkill, zustandSkill],
  src: '/svgs/asistencia.svg',
  hasNDA: true,
};
