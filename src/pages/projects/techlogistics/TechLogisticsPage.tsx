import { HeroTechLogistics } from './components/HeroTechLogistics';
import { ObjectivesTechLogistics } from './components/ObjectivesTechLogistics';
import { WorkflowTechLogistics } from './components/WorkflowTechLogistics';
import { ArchitectureTechLogistics } from './components/ArchitectureTechLogistics';

const TechLogisticsPage = () => {
  return (
    <>
      <HeroTechLogistics id="hero" />
      <ObjectivesTechLogistics id="challenge" />
      <WorkflowTechLogistics id="workflow" />
      <ArchitectureTechLogistics id="tabs" />
    </>
  );
};

export default TechLogisticsPage;
