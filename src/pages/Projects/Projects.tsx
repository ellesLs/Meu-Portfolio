import { Wrapper } from '../../components/Wrapper';
import { ProjectsCards } from './components/ProjectsCards';

import { containerVariants } from '../../constants/variants';

import * as S from './Projects.styles';

export function Projects() {
  return (
    <S.ContainerProjects
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Wrapper>
        <S.ContentProjects>
          <h2>Projetos</h2>
          <ProjectsCards />
        </S.ContentProjects>
      </Wrapper>
    </S.ContainerProjects>
  );
}
