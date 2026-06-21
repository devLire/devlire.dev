import { SectionTitle } from '@/components/SectionTitle';
import { projects } from '@/constants/projects';
import { Terminal } from 'lucide-react';
import { ProjectItem } from './ProjectItem';
import { SectionLayout } from '@/components/SectionLayout';
import type { BaseSectionProps } from '@/types';

export const Projects = ({ id }: BaseSectionProps) => {
  return (
    <SectionLayout id={id}>
      <SectionTitle icon={Terminal} text="Proyectos" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:mt-10 2xl:max-w-6xl">
        <div className="flex w-full flex-wrap items-center justify-center gap-12 md:gap-20">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              className="text-2xl"
              project={project}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
