import axios from 'axios';
import { ProjectProps } from '../types/projects.types';
import { FetchProjects } from '../hooks/useFetchProjects';

export const fetchProjectsAxios: FetchProjects = async () =>
  (
    await axios.get<ProjectProps[]>(
      'https://raw.githubusercontent.com/ellesLs/Meu-Portfolio/main/src/json/projects.json'
    )
  ).data;
