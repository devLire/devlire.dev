import { CustomBadge } from '@/components/CustomBadge';
import { CustomCard } from '@/components/CustomCard';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/projects.interface';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';
import { Lock } from 'lucide-react';
import { ProjectActions } from '@/components/ProjectActions';

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
          <ProjectActions project={project} />
        )}
      </div>
    </div>
  );
};
