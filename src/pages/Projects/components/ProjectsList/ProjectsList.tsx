import { Card } from '../Card';

import { SkeletonCard } from '../../../../components/SkeletonCard';

import { useFetchProjects } from '../../../../hooks/useFetchProjects';
import { fetchProjectsAxios } from '../../../../services/fetchProjectsAxios';

import * as S from './ProjectsList.styles';
import { ButtonLink } from '../../../../components/ButtonLink';

export function ProjectsList() {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetchProjects({ fetchProjectsList: fetchProjectsAxios });

  return (
    <S.ContainerProjectsList>
      {isLoading && [...Array(4).keys()].map((i) => <SkeletonCard key={i} />)}
      {!isLoading &&
        !error &&
        projects?.map((project) => (
          <Card.Root project={project} key={project.id}>
            <Card.Title />
            <Card.Images />
            <Card.Description />
            {project.toolsUsed.length > 0 && <Card.Tools />}
            <Card.Actions>
              {project.liveUrl && (
                <ButtonLink url={project.liveUrl} target="_blank">
                  Live
                </ButtonLink>
              )}
              {project.gitHubUrl && (
                <ButtonLink url={project.gitHubUrl} target="_blank">
                  GitHub
                </ButtonLink>
              )}
            </Card.Actions>
          </Card.Root>
        ))}
      {!isLoading && error && <div> {error?.message} </div>}
      {!isLoading && !error && !projects && <div>Deu muito ruim!</div>}
    </S.ContainerProjectsList>
  );
}
