export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  url?: string;
}

export const reactCourse: Education = {
  title: 'React: De cero a experto',
  institution: 'Udemy / Fernando Herrera',
  period: '2026',
  description:
    'Especialización en el ecosistema de React: dominio de Hooks personalizados, gestión de estado global, optimización del ciclo de vida de los componentes y consumo eficiente de APIs RESTful.',
  url: 'https://www.udemy.com/certificate/UC-6ca6bd5b-4eee-4b5d-b9c1-9113f9755419/',
};

export const gitGithubCourse: Education = {
  title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
  institution: 'Udemy / Fernando Herrera',
  period: '2026',
  description:
    'Dominio de flujos de trabajo ramificados (Git Flow), resolución de conflictos complejos, rebase interactivo, manipulación segura del historial y estrategias de colaboración bajo el estándar de Pull Requests.',
  url: 'https://www.udemy.com/certificate/UC-15e93f20-0e16-47ae-a904-c2a41e6f0697/',
};

export const typescriptCourse: Education = {
  title: 'TypeScript: Tu completa guía y manual de mano.',
  institution: 'Udemy / Fernando Herrera',
  period: '2026',
  description:
    'Implementación de tipado estricto, tipos genéricos y programación orientada a objetos. Enfoque en la configuración del compilador para capturar errores en tiempo de escritura y asegurar código escalable.',
  url: 'https://www.udemy.com/certificate/UC-9fa108e8-1fc1-46fe-b346-a7bc9c639939/',
};

export const softwareEngineeringEducation: Education = {
  title: 'Ingeniería de Software con IA',
  institution: 'SENATI',
  period: '2024 — Actualidad (5to Ciclo)',
  description:
    'Formación profesional orientada a la arquitectura de software, estructuras de datos, despliegue de servicios y fundamentos de Inteligencia Artificial aplicada a la lógica de negocio.',
};

export const educations: Education[] = [
  reactCourse,
  gitGithubCourse,
  typescriptCourse,
  softwareEngineeringEducation,
];
