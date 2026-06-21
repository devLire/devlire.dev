import { UserRound } from 'lucide-react';
import { SectionTitle } from '@/components/SectionTitle';
import { CustomCard } from '@/components/CustomCard';
import { CustomBadge } from '@/components/CustomBadge';
import { principlesList } from '@/constants/skills';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';
import { SectionLayout } from '@/components/SectionLayout';
import type { BaseSectionProps } from '@/types';

export const AboutMe = ({ id }: BaseSectionProps) => {
  const { isScaled, handleMouseEnter, handleMouseLeave } =
    useHoverScaleAnimation();

  return (
    <SectionLayout id={id}>
      <SectionTitle icon={UserRound} text="Sobre mí" />

      <div className="grid w-full max-w-5xl grid-cols-1 justify-items-center gap-8 lg:grid-cols-4">
        <CustomCard className="flex w-full max-w-xl flex-col px-4 py-6 md:max-w-2xl md:px-6 md:py-8 lg:col-span-3 lg:max-w-full">
          <div className="flex h-full flex-col justify-between gap-6 text-left font-medium text-white lg:p-6">
            {/* Presentación */}
            <h3 className="text-center text-2xl font-bold md:text-4xl lg:text-left">
              Baruc Alejandria
            </h3>

            {/* Párrafos */}
            <div className="font-red-hat-display flex flex-col gap-4 text-justify text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                Estudiante de Ing. de Software con IA en el SENATI, actualmente
                culminé mi 5to ciclo. Apasionado por la programación desde los
                14 años, empecé a programar con Python y Java, luego me aventuré
                al desarrollo Frontend y decidí enfocearme a ello. Me gusta
                trabajar con TypeScript y React.
              </p>
              <p>
                Soy un desarrollador autodidacta y proactivo, enfocado en creal
                soluciones eficientes, escalables y con un alto estándar de
                rendimiento. Me motiva profundamente resolver problemas
                complejos de arquitectura, migración de código y automatización
                de procesos. Disfruto del trabajo en equipo, la mejora continua
                y el aprendizaje constante ante las nuevas tecnologías del
                ecosistema.
              </p>
            </div>

            <div className="my-2 h-px w-full bg-zinc-800/60" />

            {/* Badges */}
            <div className="flex flex-col gap-3">
              <span className="text-center text-xs font-semibold tracking-wider text-zinc-400 uppercase lg:text-left">
                Enfoque de desarrollo:
              </span>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {principlesList.map((principle) => (
                  <CustomBadge key={principle.title} skill={principle} />
                ))}
              </div>
            </div>
          </div>
        </CustomCard>

        {/* Avatar */}
        <img
          alt="Avatar"
          className={cn(
            'self-center object-contain transition-transform duration-300',
            isScaled && 'scale-110'
          )}
          src="/avatar.png"
          width={240}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </SectionLayout>
  );
};
