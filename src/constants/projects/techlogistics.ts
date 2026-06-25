import type { Project } from '@/types/projects.interface';

import {
  axiosSkill,
  dockerSkill,
  expressSkill,
  nodeJsSkill,
  postgreSQLSkill,
  prismaSkill,
  reactNativeSkill,
  reactSkill,
  tailwindCssSkill,
  tanstackQuerySkill,
  typescriptSkill,
  zustandSkill,
} from '../skills';

export const techLogisticsProject: Project = {
  title:
    'TechLogistics: Sistema de Inventario y Control de Accesos Biométricos',

  description:
    'Diseñé y construí una plataforma full-stack compuesta por una API RESTful con Node.js y Prisma, un panel administrativo en React y una aplicación móvil en Expo con autenticación biométrica y vinculación segura de dispositivos.',

  skills: [
    reactSkill,
    reactNativeSkill,
    typescriptSkill,
    tailwindCssSkill,
    tanstackQuerySkill,
    zustandSkill,
    axiosSkill,
    nodeJsSkill,
    expressSkill,
    prismaSkill,
    postgreSQLSkill,
    dockerSkill,
  ],

  src: '/svgs/techlogistics.svg',

  hasNDA: false,

  links: {
    github: 'https://github.com/devLire/TechLogistics',
    demo: 'https://techlogistics.devlire.dev',
    projectPage: '/projects/techlogistics',
    credentials: {
      user: 'administrador@techlogistics.com',
      pass: '123456',
    },
  },

  overview: {
    id: 'summary',
    tabTitle: 'Resumen',
    summary:
      'Sistema de gestión de inventario y control de acceso para almacenes, compuesto por un panel web administrativo y una app móvil usada como credencial biométrica para operarios.',

    objective:
      'Reducir inconsistencias de stock en almacenes y prevenir suplantación de identidad en el registro de asistencia mediante autenticación biométrica ligada al dispositivo.',

    duration: {
      period: 'Mayo - Junio 2026',
    },

    roles: [
      {
        area: 'Monorepo Architecture',
        description:
          'Estructuración del proyecto en un monorepo con backend, web y mobile apps separadas, cada una con su entorno independiente de build y dependencias.',
      },
      {
        area: 'Backend API',
        description:
          'Desarrollo de API REST con Node.js, Express y TypeScript. Implementación de transacciones atómicas con Prisma y control de acceso basado en roles (RBAC).',
      },
      {
        area: 'Web Dashboard',
        description:
          'Construcción del panel administrativo en React y Vite. Módulo de gestión de inventario con validación en tiempo real y sincronización optimizada mediante TanStack Query.',
      },
      {
        area: 'Mobile App',
        description:
          'Aplicación móvil en React Native (Expo) que funciona como credencial biométrica. Autenticación mediante huella dactilar y almacenamiento seguro en SecureStore.',
      },
      {
        area: 'UX / Security',
        description:
          'Diseño del flujo de registro de dispositivos y auditoría de accesos biométricos con feedback visual sobre intentos de acceso inválidos.',
      },
    ],
  },

  sections: [
    {
      id: 'backend',
      tabTitle: 'Backend API',
      title: 'API RESTful de Alta Consistencia',
      subtitle: 'Node.js + Express + Prisma ORM + PostgreSQL',
      description:
        'Arquitectura diseñada bajo tipado estricto encargada de orquestar la seguridad biométrica y la persistencia atómica del inventario.',
      images: [
        '/projects/techlogistics/techlogistics-backend-1.png',
        '/projects/techlogistics/techlogistics-backend-2.png',
      ],
      isMobileView: false,
      badges: [
        nodeJsSkill,
        typescriptSkill,
        expressSkill,
        prismaSkill,
        postgreSQLSkill,
        dockerSkill,
      ],
      highlights: [
        {
          title: 'Patrón DTO',
          desc: 'Validación estricta de entrada mediante tuplas estáticas `[error?, dto?]`, evitando el uso masivo de bloques try/catch.',
        },
        {
          title: 'Transacciones Atómicas',
          desc: 'Implementación de `prisma.$transaction` para garantizar que las variaciones de stock físico nunca sufran descuadres por fallos de red.',
        },
        {
          title: 'Soft-Delete con Sufijo',
          desc: 'Truco de mutación de ID (`_INACTIVO_`) al desvincular hardware para liberar la restricción UNIQUE de PostgreSQL sin alterar registros históricos.',
        },
      ],
    },

    {
      id: 'web',
      tabTitle: 'Web Dashboard',
      title: 'Torre de Control Administrativa',
      subtitle: 'React 19 + React Router v7 + Zustand + TanStack Query',
      description:
        'Single Page Application (SPA) para monitoreo de inventario, gestión de usuarios y auditoría de accesos.',
      images: [
        '/projects/techlogistics/techlogistics-web-1.png',
        '/projects/techlogistics/techlogistics-web-2.png',
        '/projects/techlogistics/techlogistics-web-3.png',
      ],
      isMobileView: false,
      badges: [
        reactSkill,
        typescriptSkill,
        tailwindCssSkill,
        tanstackQuerySkill,
        zustandSkill,
        axiosSkill,
      ],
      highlights: [
        {
          title: 'Control RBAC Estricto',
          desc: 'Protección de vistas mediante Route Guards síncronos que evalúan jerarquías de roles (Administrador, Supervisor, Operario).',
        },
        {
          title: 'Control Centralizado de Accesos',
          desc: 'Administración de dispositivos autorizados, permisos de enrolamiento y métodos de autenticación desde un único panel web.',
        },
        {
          title: 'Terminal POS Logístico',
          desc: 'Módulo interactivo con validación reactiva que bloquea físicamente la UI si se intentan despachar cantidades superiores al stock actual.',
        },
      ],
    },

    {
      id: 'mobile',
      tabTitle: 'Mobile App',
      title: 'Llave Física y Enclave Seguro',
      subtitle: 'Expo (SDK 56) + React Native + Hardware Binding',
      description:
        'Aplicación nativa diseñada para terminales de almacén que integra validaciones biométricas por hardware local.',
      images: [
        '/projects/techlogistics/techlogistics-app-1.jpeg',
        '/projects/techlogistics/techlogistics-app-2.jpeg',
        '/projects/techlogistics/techlogistics-app-3.jpeg',
      ],
      isMobileView: true,
      badges: [
        reactNativeSkill,
        typescriptSkill,
        tailwindCssSkill,
        tanstackQuerySkill,
        zustandSkill,
        axiosSkill,
      ],
      highlights: [
        {
          title: 'Hardware Binding',
          desc: 'Criptografía local con `expo-secure-store` y herencia nativa de huella dactilar/rostro directo del chip de seguridad del terminal.',
        },
        {
          title: 'DeviceChecker Provider',
          desc: 'Middleware absoluto en la raíz de la UI que despliega un overlay restrictivo si el identificador del teléfono no está pre-autorizado.',
        },
        {
          title: 'Estrategia Anti-Caché',
          desc: 'Manejo de cabeceras estrictas e inyección de timestamps para revalidar la sesión humana frente a bloqueos remotos.',
        },
      ],
    },
  ],
};
