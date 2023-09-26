import { useEffect, useState } from 'react';

export function useScrollToTopBtn() {
  const [isShowScrollBtn, setIsShowScrollBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 100) {
        setIsShowScrollBtn(true);
      } else {
        setIsShowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return { isShowScrollBtn, scrollToTop };
}
