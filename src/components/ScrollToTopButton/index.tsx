import { useScrollToTopBtn } from './Hook/useScrollToTopBtn';
import { ImArrowUp2 } from 'react-icons/im';

import * as S from './ScrollToTop.styles';

export function ScrollToTopButton({ isVisible }: { isVisible: boolean }) {
  const { isShowScrollBtn, scrollToTop } = useScrollToTopBtn();

  return (
    <S.ButtonScrollToTop
      className={isShowScrollBtn ? 'inView' : ''}
      onClick={scrollToTop}
      type="button"
      style={{
        transitionDuration: '500ms',
        transitionDelay: '0ms',
        position: isVisible ? 'absolute' : undefined,
      }}
    >
      <ImArrowUp2 />
    </S.ButtonScrollToTop>
  );
}
