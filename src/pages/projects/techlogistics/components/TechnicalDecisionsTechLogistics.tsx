import type { BaseSectionProps } from '@/types';
import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import { Construction } from 'lucide-react';
import {
  axiosSkill,
  prismaSkill,
  reactNativeSkill,
  reactSkill,
  zustandSkill,
  type Skill,
} from '@/constants/skills';
import { TechnicalDecisionRow } from '../../components/TechnicalDecisionRow';

interface TechnicalDecision {
  decision: string;
  reason: string;
  skill?: Skill;
}

export const TechnicalDecisionsTechLogistics = ({ id }: BaseSectionProps) => {
  const TECHNICALDECISIONS: TechnicalDecision[] = [
    {
      decision: 'React',
      reason:
        'Escogí React por su modelo basado en componentes, lo que me permitió construir interfaces reutilizables y mantener una estructura escalable tanto para el panel administrativo como para futuras funcionalidades.',
      skill: reactSkill,
    },
    {
      decision: 'React Native + Expo',
      reason:
        'Desarrollé la aplicación móvil con React Native y Expo para reutilizar conocimientos y herramientas del ecosistema React. Expo aceleró el desarrollo al proporcionar un entorno con configuraciones listas para usar, permitiéndome enfocarme en la lógica de negocio y no en la configuración nativa.',
      skill: reactNativeSkill,
    },
    {
      decision: 'Axios',
      reason:
        'Utilicé Axios para centralizar la comunicación con la API mediante una única configuración de cliente, facilitando el manejo de interceptores, autenticación, errores y futuras extensiones del sistema.',
      skill: axiosSkill,
    },
    {
      decision: 'Zustand',
      reason:
        'Implementé Zustand para gestionar el estado global relacionado con la sesión del usuario y la autenticación. Su API minimalista permitió mantener una solución simple y fácil de mantener sin añadir la complejidad de alternativas más robustas.',
      skill: zustandSkill,
    },
    {
      decision: 'Prisma ORM',
      reason:
        'Escogí Prisma para simplificar el acceso a la base de datos mediante tipado seguro y generación automática de clientes. Además, su sistema de migraciones facilitó la evolución del esquema de la base de datos durante el desarrollo.',
      skill: prismaSkill,
    },
    {
      decision: 'RBAC',
      reason:
        'Implementé un modelo de control de acceso basado en roles para centralizar permisos y garantizar que cada usuario únicamente pudiera acceder a las funcionalidades correspondientes a su perfil.',
    },
  ];

  return (
    <SectionLayout id={id}>
      <SectionTitle icon={Construction} text="Decisiones técnicas" />

      <div className="container max-w-6xl px-4 lg:px-12">
        <div className="flex flex-col gap-4">
          {TECHNICALDECISIONS.map((decision, index) => (
            <TechnicalDecisionRow key={index} technicalDecision={decision} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
