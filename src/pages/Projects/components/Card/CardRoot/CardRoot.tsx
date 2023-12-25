import { ProjectContextProvider } from '../../../../../contexts/ProjectContext';
import { ProjectProps } from '../../../../../types/projects.types';
import * as S from './CardRoot.styles';

type ProjectsCardProps = {
  children?: React.ReactNode;
  project: ProjectProps;
};

export function CardRoot({ children, project }: ProjectsCardProps) {
  return (
    <>
      <ProjectContextProvider project={project}>
        <S.CardContainer>{children}</S.CardContainer>
      </ProjectContextProvider>
    </>
  );
}
