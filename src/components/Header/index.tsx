import { useState } from 'react';
import { Area } from '../Area';
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
      <Area>
        <S.ContentHeader>
          <Logo />
          <MenuMobile toggleMenu={handleToogleMenu} isOpenMenu={isOpenMenu} />
          <NavBar isOpenMenu={isOpenMenu} toggleMenu={handleToogleMenu} />
        </S.ContentHeader>
      </Area>
    </S.ContainerHeader>
  );
}
