import { useContext } from 'react';
import { ProjectContext, ProjectContextProps } from '../contexts/ProjectContext';

export const useProjectContext = () => {
  const projectContext = useContext(ProjectContext) as ProjectContextProps;

  if (!projectContext) {
    throw new Error('useProjectContext has to be used within <ProjectContext.Provider>');
  }

  return projectContext;
};
