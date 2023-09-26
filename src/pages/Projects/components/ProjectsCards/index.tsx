import { Card } from '../Card';
import { ButtonLink } from '../../../../components/ButtonLink';

import projects from '../../../../json/projects.json';

import * as S from './ProjectsCards.styles';

export function ProjectsCards() {
  return (
    <S.ContainerListCards>
      {projects.map((project) => (
        <Card.Root key={project.id}>
          <Card.Title title={project.title} />
          <Card.Images
            desktop={project.images.desktopImg}
            mobile={project.images.mobileImg}
            alt={project.title}
            hasModal={project.modal}
          />
          <Card.Description description={project.description} />
          {project.toolsUsed && (
            <>
              <h3>Tecnologias Usadas</h3>
              <Card.Tools tools={project.toolsUsed} />
            </>
          )}
          <Card.Buttons>
            {project.liveUrl && <ButtonLink url={project.liveUrl}>Live</ButtonLink>}
            <ButtonLink url={project.gitHubUrl}>GitHub</ButtonLink>
          </Card.Buttons>
        </Card.Root>
      ))}

      <Card.Root>
        <Card.Title title="Novo Projeto" />
        <Card.Images alt="Em Desenvolvimento" desktop={'branding-desktop'} hasModal={false} />
        <Card.Description description={'Um novo Projeto em Desenvolvimento!!!'} />
      </Card.Root>
    </S.ContainerListCards>
  );
}
