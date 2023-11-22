import { Card } from '../Card';
import { ButtonLink } from '../../../../components/ButtonLink';

import projects from '../../../../json/projects.json';

import * as S from './ProjectsCards.styles';

export function ProjectsCards() {
  return (
    <S.ContainerListCards>
      {projects.map((project) => (
        <Card.Root key={project.id} project={project}>
          <Card.Title />
          <Card.Images />
          <Card.Description />
          {project.toolsUsed.length > 1 && (
            <>
              <h3>Tecnologias Usadas</h3>
              <Card.Tools />
            </>
          )}
          <Card.Buttons>
            {project.liveUrl && <ButtonLink url={project.liveUrl}>Live</ButtonLink>}
            {project.gitHubUrl && <ButtonLink url={project.gitHubUrl}>GitHub</ButtonLink>}
          </Card.Buttons>
        </Card.Root>
      ))}
    </S.ContainerListCards>
  );
}
