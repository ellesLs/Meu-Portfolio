import { Wrapper } from '../../components/Wrapper';
import { ProjectsList } from './components/ProjectsList';

import { containerVariants } from '../../constants/variants';

import * as S from './Projects.styles';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from '../../components/ErrorFallBack/ErrorFallBack';

export function Projects() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <S.ContainerProjects
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Wrapper>
          <S.ContentProjects>
            <h2>Projetos</h2>
            <ProjectsList />
          </S.ContentProjects>
        </Wrapper>
      </S.ContainerProjects>
    </ErrorBoundary>
  );
}
