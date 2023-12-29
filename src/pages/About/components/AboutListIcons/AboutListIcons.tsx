import { AboutIcon } from '../AboutIcon';

import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandGit,
} from 'react-icons/tb';
import { IoLogoGithub } from 'react-icons/io5';

import * as S from './AboutListIcons.styles';

export function AboutListIcons() {
  return (
    <S.ContainerTechs>
      <h3>Habilidades</h3>
      <S.ContentTechs>
        <AboutIcon name="Html5" icon={<TbBrandHtml5 />} />
        <AboutIcon name="Css3" icon={<TbBrandCss3 />} />
        <AboutIcon name="Javascript" icon={<TbBrandJavascript />} />
        <AboutIcon name="React" icon={<TbBrandReact />} />
        <AboutIcon name="Typescript" icon={<TbBrandTypescript />} />
        <AboutIcon name="Git" icon={<TbBrandGit />} />
        <AboutIcon name="GitHub" icon={<IoLogoGithub />} />
      </S.ContentTechs>
    </S.ContainerTechs>
  );
}
