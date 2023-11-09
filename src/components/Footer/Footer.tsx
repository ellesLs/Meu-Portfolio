import { Wrapper } from '../Area/Wrapper';

import * as S from './Footer.styles';

export function Footer() {
  return (
    <S.ContainerFooter>
      <Wrapper>
        <S.ContentFooter>
          <p>
            Desenvolvido por <strong>Elles</strong> © <i>{new Date().getFullYear()}</i>
          </p>
        </S.ContentFooter>
      </Wrapper>
    </S.ContainerFooter>
  );
}
