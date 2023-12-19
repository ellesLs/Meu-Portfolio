import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ProjectProps } from '../pages/Projects/projects.types';

type useFetchProjectsProps = {
  fetchProjects: () => Promise<ProjectProps[]>;
};

export function useFetchProjects({ fetchProjects }: useFetchProjectsProps) {
  const {
    data: dataProjects,
    isLoading,
    error,
  } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects });

  return {
    dataProjects,
    isLoading,
    error: axios.isAxiosError(error) ? error : null,
  };
}
