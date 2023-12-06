import { useContext } from 'react';
import { ProjectContext, ProjectContextProps } from '../contexts/ProjectContext';

export const useProjectContext = () => useContext(ProjectContext) as ProjectContextProps;
