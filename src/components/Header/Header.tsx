import { useState } from 'react';
import { Wrapper } from '../Wrapper';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { MenuMobile } from '../MenuMobile';

import * as S from './Header.styles';

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToogleMenu = () => {
    // if (event.type === 'touchstart') event.preventDefault();
    setIsOpenMenu((isOpen) => !isOpen);
  };

  return (
    <S.ContainerHeader>
      <Wrapper>
        <S.ContentHeader>
          <Logo />
          <MenuMobile onToggleMenu={handleToogleMenu} isOpenMenu={isOpenMenu} />
          <NavBar isOpenMenu={isOpenMenu} onToggleMenu={handleToogleMenu} />
        </S.ContentHeader>
      </Wrapper>
    </S.ContainerHeader>
  );
}
