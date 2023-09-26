import * as S from './MenuMobile.styles';

type MenuMobileProps = {
  onToggleMenu: () => void;
  isOpenMenu: boolean;
};

export function MenuMobile({ onToggleMenu, isOpenMenu }: MenuMobileProps) {
  return (
    <S.ContainerMenuMobile
      onClick={onToggleMenu}
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
