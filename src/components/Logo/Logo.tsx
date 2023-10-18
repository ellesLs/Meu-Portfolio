import { Link } from 'react-router-dom';
import * as S from './Logo.styles';
// import logo from '../../imagens/logo.png';
import logoV2 from '../../assets/images/logoV2.png';

export function Logo() {
  return (
    <S.ContainerLogo>
      <Link to="/">
        <S.LogoSpan>
          <img src={logoV2} alt="logo Elles" />
        </S.LogoSpan>
      </Link>
    </S.ContainerLogo>
  );
}
