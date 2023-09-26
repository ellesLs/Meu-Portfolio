import { NavLink } from 'react-router-dom';
import * as S from './NavBarItem.styles';

type NavBarItemProps = {
  children: React.ReactNode;
  url: string;
};

export function NavBarItem({ children, url }: NavBarItemProps) {
  return (
    <S.ItemNavBar>
      <NavLink to={url} className={({ isActive }) => (isActive ? 'nav_item_active' : '')}>
        {children}
      </NavLink>
    </S.ItemNavBar>
  );
}
