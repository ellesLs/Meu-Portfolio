import { Card } from '../Card';
import { ButtonLink } from '../../../../components/ButtonLink';

import * as S from './ProjectsCards.styles';

import { SkeletonCard } from '../../../../components/SkeletonCard';
import { useFetchProjects } from '../../../../hooks/useFetchProjects';

export function ProjectsCards() {
  const { dataProjects, isLoading, error } = useFetchProjects();

  return (
    <S.ContainerListCards>
      {isLoading && [...Array(4).keys()].map((i) => <SkeletonCard key={i} />)}
      {!isLoading &&
        !error &&
        dataProjects?.map((project) => (
          <Card.Root project={project} key={project.id}>
            <Card.Title />
            <Card.Images />
            <Card.Description />
            {project.toolsUsed.length > 0 && <Card.Tools />}
            <Card.Buttons>
              {project.liveUrl && <ButtonLink url={project.liveUrl}>Live</ButtonLink>}
              {project.gitHubUrl && <ButtonLink url={project.gitHubUrl}>GitHub</ButtonLink>}
            </Card.Buttons>
          </Card.Root>
        ))}
      {!isLoading && error && <div> {error?.message} </div>}
      {!isLoading && !error && !dataProjects && <div>Deu muito ruim!</div>}
    </S.ContainerListCards>
  );
}
