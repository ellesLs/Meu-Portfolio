import { Area } from '../../components/Area';
import { ProjectsCards } from './components/ProjectsCards';

import { containerVariants } from '../../constants/containerVariants';

import * as S from './Projects.styles';
import { useLocation } from 'react-router-dom';

export function Projects() {
  const location = useLocation();
  return (
    <S.ContainerProjects
      key={location.pathname}
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
  );
}
