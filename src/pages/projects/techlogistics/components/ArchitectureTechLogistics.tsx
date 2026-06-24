import { techLogisticsProject } from '@/constants/projects/techlogistics';
import { SectionLayout } from '@/components/SectionLayout';
import type { BaseSectionProps } from '@/types';
import { CustomTabs } from '@/components/CustomTabs';

export const ArchitectureTechLogistics = ({ id }: BaseSectionProps) => {
  return (
    <SectionLayout id={id}>
      <div className="container mx-auto px-4 lg:px-12">
        <CustomTabs project={techLogisticsProject} />
      </div>
    </SectionLayout>
  );
};
