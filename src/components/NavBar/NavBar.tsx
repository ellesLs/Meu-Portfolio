import { NavBarItem } from '../NavBarItem';
import { FaHome } from 'react-icons/fa';

import * as S from './NavBar.styles';

type NavBarProps = {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
};

export function NavBar({ isOpenMenu, onToggleMenu }: NavBarProps) {
  return (
    <S.ContainerNavBar className={isOpenMenu ? 'openMenu' : ''} onClick={onToggleMenu}>
      <S.ContentNavBar id="menu" role="menu" data-state={isOpenMenu ? 'opened' : 'closed'}>
        <NavBarItem url="/">
          <FaHome />
          <span>Home</span>
        </NavBarItem>
        <NavBarItem url="/about">
          <span>Sobre</span>
        </NavBarItem>
        <NavBarItem url="/projects">
          <span>Projetos</span>
        </NavBarItem>
      </S.ContentNavBar>
    </S.ContainerNavBar>
  );
}
