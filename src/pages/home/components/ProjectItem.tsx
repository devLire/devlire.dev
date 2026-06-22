import { CustomBadge } from '@/components/CustomBadge';
import { CustomCard } from '@/components/CustomCard';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/projects.interface';
import { githubSkill } from '@/constants/skills';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';
import { ArrowRight, Code2, Lock } from 'lucide-react';

interface Props {
  project: Project;
  className?: string;
}

export const ProjectItem = ({ project, className }: Props) => {
  const { isScaled, handleMouseLeave, handleMouseEnter } =
    useHoverScaleAnimation();

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 lg:grid lg:grid-cols-2',
        className
      )}
    >
      <CustomCard
        className={cn(
          'w-fit max-w-full p-2 transition-transform duration-300',
          isScaled && 'scale-110'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          alt={project.title}
          className="h-auto max-w-full rounded-3xl object-contain"
          src={project.src}
          width={430}
        />
      </CustomCard>

      <div className="flex h-full flex-col gap-2">
        <h3 className="font-red-hat-display text-center text-3xl lg:text-start">
          {project.title}
        </h3>

        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          {project.skills.map((skill, index) => (
            <CustomBadge key={index} skill={skill} />
          ))}
        </div>

        <p className="text-sm opacity-80">{project.description}</p>

        {project.hasNDA ? (
          <Button
            className="w-fit cursor-not-allowed self-center px-5 lg:self-start"
            variant="destructive"
          >
            <Lock size={20} />
            NDA
          </Button>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button
                className="w-fit bg-gray-600 px-5"
                onClick={() =>
                  project.links?.github &&
                  window.open(project.links.github, '_blank')
                }
              >
                <div
                  className={`h-[1.5em] w-[1.5em] ${githubSkill.iconColor}`}
                  style={{
                    maskImage: `url(${githubSkill.src})`,
                    WebkitMaskImage: `url(${githubSkill.src})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                />
                Repositorio
              </Button>
              <Button
                className="w-fit bg-emerald-700 px-5"
                onClick={() =>
                  project.links?.demo &&
                  window.open(project.links.demo, '_blank')
                }
              >
                <Code2 size={24} />
                Demo
              </Button>
              {project.links?.projectPage && (
                <Button
                  className="w-fit bg-blue-700 px-5"
                  onClick={() =>
                    project.links?.demo &&
                    window.open(project.links.demo, '_blank')
                  }
                >
                  Ver más
                  <ArrowRight size={24} />
                </Button>
              )}
            </div>

            {project.links?.credentials && (
              <p className="mt-1 text-center text-xs text-zinc-400 lg:text-start">
                🔑{' '}
                <span className="font-semibold text-zinc-300">
                  Credenciales de prueba:
                </span>
                User:{' '}
                <code className="rounded bg-zinc-800 px-1 py-0.5 text-emerald-400">
                  {project.links.credentials.user}
                </code>
                | Pass:{' '}
                <code className="rounded bg-zinc-800 px-1 py-0.5 text-emerald-400">
                  {project.links.credentials.pass}
                </code>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
