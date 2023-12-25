import axios from 'axios';
import { ProjectProps } from '../types/projects.types';

export const fetchProjects = async () =>
  (
    await axios.get<ProjectProps[]>(
      'https://raw.githubusercontent.com/ellesLs/Meu-Portfolio/main/src/json/projects.json'
    )
  ).data;
