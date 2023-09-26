import { AboutIcon } from '../AboutIcon';

import { IconBrandHtml5 } from '@tabler/icons-react';
import { IconBrandCss3 } from '@tabler/icons-react';
import { IconBrandJavascript } from '@tabler/icons-react';
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandTypescript } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandGit } from '@tabler/icons-react';

import * as S from './AboutListIcons.styles';

export function AboutListIcons() {
  return (
    <S.ContainerTechs>
      <h3>Habilidades</h3>
      <S.ContentTechs>
        <AboutIcon name="Html" icon={<IconBrandHtml5 />} />
        <AboutIcon name="Css" icon={<IconBrandCss3 />} />
        <AboutIcon name="Javascript" icon={<IconBrandJavascript />} />
        <AboutIcon name="React" icon={<IconBrandReact />} />
        <AboutIcon name="Typescript" icon={<IconBrandTypescript />} />
        <AboutIcon name="Git" icon={<IconBrandGit />} />
        <AboutIcon name="GitHub" icon={<IconBrandGithub />} />
      </S.ContentTechs>
    </S.ContainerTechs>
  );
}
