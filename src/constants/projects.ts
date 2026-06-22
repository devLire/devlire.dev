import type { Project } from '@/types/projects.interface';

import { architectureMigrationProject } from './projects/architecture-migration';
import { geolocationPrototypeProject } from './projects/geolocation-prototype';
import { techLogisticsProject } from './projects/techlogistics';

export const projects: Project[] = [
  architectureMigrationProject,
  techLogisticsProject,
  geolocationPrototypeProject,
];
