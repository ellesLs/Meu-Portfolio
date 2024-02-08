import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ProjectProps } from '../types/projects.types';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}

//This type is for Dependency inversion
export type FetchProjects = {
  (): Promise<ProjectProps[]>;
};

type useFetchProjectsProps = {
  fetchProjectsList: FetchProjects;
};

export function useFetchProjects({ fetchProjectsList }: useFetchProjectsProps) {
  const query = useQuery({ queryKey: ['projects'], queryFn: fetchProjectsList });

  return query;
}
