import { useContext } from 'react';
import { ProjectContext, ProjectContextProps } from '../contexts/ContextProjects';

export const useProjectContext = () => useContext(ProjectContext) as ProjectContextProps;
