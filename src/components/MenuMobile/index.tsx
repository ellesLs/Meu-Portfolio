import * as S from './MenuMobile.styles';

type MenuMobileProps = {
  toggleMenu: () => void;
  isOpenMenu: boolean;
};

export function MenuMobile({ toggleMenu, isOpenMenu }: MenuMobileProps) {
  return (
    <S.ContainerMenuMobile
      onClick={toggleMenu}
      // onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      isOpen={isOpenMenu}
      aria-label={`${isOpenMenu ? 'Open' : 'Close'} Menu`}
      aria-expanded={isOpenMenu ? true : false}
      aria-haspopup="true"
      aria-controls="menu"
    >
      <div className="burger"></div>
    </S.ContainerMenuMobile>
  );
}
