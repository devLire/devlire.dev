import { HeroTechLogistics } from './components/HeroTechLogistics';
import { ObjectivesTechLogistics } from './components/ObjectivesTechLogistics';
import { WorkflowTechLogistics } from './components/WorkflowTechLogistics';
import { ArchitectureTechLogistics } from './components/ArchitectureTechLogistics';
import { TechnicalDecisionsTechLogistics } from './components/TechnicalDecisionsTechLogistics';

const TechLogisticsPage = () => {
  return (
    <>
      <HeroTechLogistics id="hero" />
      <ObjectivesTechLogistics id="challenge" />
      <WorkflowTechLogistics id="workflow" />
      <ArchitectureTechLogistics id="tabs" />
      <TechnicalDecisionsTechLogistics id="technical-decisions" />
    </>
  );
};

export default TechLogisticsPage;
