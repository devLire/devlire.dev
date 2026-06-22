import { HeroTechLogistics } from './components/HeroTechLogistics';
import { TechLogisticsTabs } from './components/TechLogisticsTabs';

const TechLogisticsPage = () => {
  return (
    <>
      <HeroTechLogistics id="hero" />
      <TechLogisticsTabs id="tabs" />
    </>
  );
};

export default TechLogisticsPage;
