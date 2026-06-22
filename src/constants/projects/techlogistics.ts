import {
  nodeJsSkill,
  postgreSQLSkill,
  prismaSkill,
  reactNativeSkill,
  reactSkill,
  tailwindCssSkill,
  tanstackQuerySkill,
  zustandSkill,
  type Skill,
} from '../skills';

export interface TechSection {
  id: string;
  tabTitle: string;
  title: string;
  subtitle: string;
  description: string;
  badges: Skill[];
  highlights: { title: string; desc: string }[];
}

export const techLogisticsData: TechSection[] = [
  {
    id: 'backend',
    tabTitle: 'Backend API',
    title: 'API RESTful de Alta Consistencia',
    subtitle: 'Node.js + Express + Prisma ORM + PostgreSQL',
    description:
      'Arquitectura diseñada bajo tipado estricto encargada de orquestar la seguridad biométrica y la persistencia atómica del inventario.',
    badges: [nodeJsSkill, prismaSkill, postgreSQLSkill],
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
      'Single Page Application (SPA) optimizada con React Compiler para el monitoreo IoT en tiempo real y la auditoría de accesos.',
    badges: [reactSkill, tailwindCssSkill, zustandSkill, tanstackQuerySkill],
    highlights: [
      {
        title: 'Control RBAC Estricto',
        desc: 'Protección de vistas mediante Route Guards síncronos que evalúan jerarquías de roles (Administrador, Supervisor, Operario).',
      },
      {
        title: 'Terminal POS Logístico',
        desc: 'Módulo interactivo con validación reactiva que bloquea físicamente la UI si se intentan despachar cantidades superiores al stock actual.',
      },
      {
        title: 'Paralelismo de Datos',
        desc: 'Ejecución concurrentes de múltiples queries analíticas vía TanStack Query para mitigar cuellos de botella en la renderización.',
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
    badges: [reactNativeSkill, tailwindCssSkill],
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
        desc: 'Manejo de cabeceras estrictas e inyección de timestamps para revalidar la sesión humana al milisegundo exacto frente a bloqueos remotos.',
      },
    ],
  },
];
