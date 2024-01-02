import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ProjectProps } from '../types/projects.types';

//This type is for Dependency inversion
export type FetchProjects = {
  (): Promise<ProjectProps[]>;
};

type useFetchProjectsProps = {
  fetchProjectsList: FetchProjects;
};

export function useFetchProjects({ fetchProjectsList }: useFetchProjectsProps) {
  const query = useQuery({ queryKey: ['projects'], queryFn: fetchProjectsList });

  return {
    ...query,
    error: axios.isAxiosError(query.error) ? query.error : null,
  };
}
