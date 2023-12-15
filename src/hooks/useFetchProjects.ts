import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ProjectProps } from '../pages/Projects/projects.types';

const fetchProjects = async () => {
  const { data } = await axios.get<ProjectProps[]>(
    'https://raw.githubusercontent.com/ellesLs/Meu-Portfolio/main/src/json/projects.json'
  );
  return data;
};

export function useFetchProjects() {
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
