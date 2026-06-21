import { SectionTitle } from '@/components/SectionTitle';
import { primarySkills, secondarySkills } from '@/constants/skills';
import { Brain } from 'lucide-react';
import { SkillItem } from './SkillItem';
import { SectionLayout } from '@/components/SectionLayout';
import type { BaseSectionProps } from '@/types';

export const Skills = ({ id }: BaseSectionProps) => {
  return (
    <SectionLayout id={id}>
      <SectionTitle icon={Brain} text="Habilidades" />

      <div className="flex w-full max-w-3xl flex-col items-center gap-12">
        {/* Primary Skills */}
        <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-12">
          {primarySkills.map((skill) => (
            <SkillItem key={skill.title} className="text-2xl" skill={skill} />
          ))}
        </div>

        {/* Secondary Skills */}
        <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-8">
          {secondarySkills.map((skill) => (
            <SkillItem key={skill.title} className="text-sm" skill={skill} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
