import { HeroTechLogistics } from './components/HeroTechLogistics';
import { ArchitectureTechLogistics } from './components/ArchitectureTechLogistics';

const TechLogisticsPage = () => {
  return (
    <>
      <HeroTechLogistics id="hero" />
      <ArchitectureTechLogistics id="tabs" />
    </>
  );
};

export default TechLogisticsPage;
