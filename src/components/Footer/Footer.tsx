import { Area } from '../Area/Area';

import * as S from './Footer.styles';

export function Footer() {
  return (
    <S.ContainerFooter>
      <Area>
        <S.ContentFooter>
          <p>
            Desenvolvido por <strong>Elles</strong> © <i>{new Date().getFullYear()}</i>
          </p>
        </S.ContentFooter>
      </Area>
    </S.ContainerFooter>
  );
}
