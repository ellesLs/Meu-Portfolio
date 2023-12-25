import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ProjectProps } from '../pages/Projects/projects.types';

type useFetchProjectsProps = {
  fetchProjects: () => Promise<ProjectProps[]>;
};

export function useFetchProjects({ fetchProjects }: useFetchProjectsProps) {
  const query = useQuery({ queryKey: ['projects'], queryFn: fetchProjects });

  return {
    ...query,
    error: axios.isAxiosError(query.error) ? query.error : null,
  };
}
