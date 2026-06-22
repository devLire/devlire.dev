import type { Project } from '@/types';
import { Button } from './ui/button';
import { githubSkill } from '@/constants/skills';
import { Code2, ArrowRight } from 'lucide-react';

interface Props {
  project: Project;
  isProjectPage?: boolean;
}

export const ProjectActions = ({ project, isProjectPage = false }: Props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
        <Button
          className="w-fit bg-gray-600 px-5"
          onClick={() =>
            project.links?.github && window.open(project.links.github, '_blank')
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
            project.links?.demo && window.open(project.links.demo, '_blank')
          }
        >
          <Code2 size={24} />
          Demo
        </Button>
        {project.links?.projectPage && !isProjectPage && (
          <Button
            className="w-fit bg-blue-700 px-5"
            onClick={() =>
              project.links?.demo && window.open(project.links.demo, '_blank')
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
  );
};
