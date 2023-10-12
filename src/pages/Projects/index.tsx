import { Area } from '../../components/Area';
import { ProjectsCards } from './components/ProjectsCards';
import { containerVariants } from '../../Constants/containerVariants';

import * as S from './Projects.styles';

export function Projects() {
  return (
    <>
      <S.ContainerProjects
        key="projects"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Area>
          <S.ContentProjects>
            <h2>Projetos</h2>
            <ProjectsCards />
          </S.ContentProjects>
        </Area>
      </S.ContainerProjects>
    </>
  );
}
