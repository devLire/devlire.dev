import { AboutMe } from './components/AboutMe';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export const HomePage = () => {
  return (
    <>
      <Hero openToWork id="hero" />
      <Skills id="skills" />
      <Projects id="projects" />
      <AboutMe />
    </>
  );
};
