import { Area } from '../../components/Area';
import { ProjectsCards } from './components/ProjectsCards';

import * as S from './Projects.styles';

export function Projects() {
  return (
    <>
      <S.ContainerProjects
        initial={{ width: '100%', opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        exit={{ x: window.innerWidth, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'backIn' }}
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
