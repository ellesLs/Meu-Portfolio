import { createContext } from 'react';
import { ProjectProps } from '../types/projects.types';

export type ProjectContextProps = {
  project: ProjectProps;
};

type ProjectContextProviderProps = {
  children: React.ReactNode;
  project: ProjectProps;
};

export const ProjectContext = createContext<ProjectContextProps | null>(null);

function ProjectContextProvider({ children, project }: ProjectContextProviderProps) {
  return <ProjectContext.Provider value={{ project }}>{children}</ProjectContext.Provider>;
}

export { ProjectContextProvider };
