import { SectionTitle } from '@/components/SectionTitle';
import { primarySkills, secondarySkills } from '@/constants/skills';
import { Brain } from 'lucide-react';
import { SkillItem } from './SkillItem';

interface Props {
  id?: string;
}

export const Skills = ({ id }: Props) => {
  return (
    <section
      className="relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden py-20 text-white md:py-12 2xl:py-32"
      id={id}
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-10">
          <SectionTitle icon={Brain} text="Habilidades" />

          <div className="flex w-full max-w-3xl flex-col items-center gap-12">
            {/* Primary Skills */}
            <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-12">
              {primarySkills.map((skill) => (
                <SkillItem
                  key={skill.title}
                  className="text-2xl"
                  skill={skill}
                />
              ))}
            </div>

            {/* Secondary Skills */}
            <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-8">
              {secondarySkills.map((skill) => (
                <SkillItem
                  key={skill.title}
                  className="text-sm"
                  skill={skill}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
