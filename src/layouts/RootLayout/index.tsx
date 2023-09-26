import { useRef } from 'react';

import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { ScrollToTopButton } from '../../components/ScrollToTopButton';

import { useObserver } from '../../Hooks/useObserver';

export function RootLayout() {
  const refBtnWrap = useRef<HTMLDivElement>(null);

  const { isVisible: isWrapVisible } = useObserver(refBtnWrap);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <div className="scrollBtn-wrap" ref={refBtnWrap}>
        <ScrollToTopButton isVisible={isWrapVisible} />
      </div>
      <Footer />
    </>
  );
}
