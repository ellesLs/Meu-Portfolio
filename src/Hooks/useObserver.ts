import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useObserver(ref: MutableRefObject<HTMLElement | null>) {
  const refObserver = useRef<IntersectionObserver | null>(null);
  const [isVisible, seIsVisible] = useState<boolean>(false);

  useEffect(() => {
    refObserver.current = new IntersectionObserver(([entry]) => seIsVisible(entry.isIntersecting), {
      rootMargin: '5px',
    });

    if (!ref.current) return;

    refObserver.current?.observe(ref.current);

    return () => {
      refObserver.current?.disconnect();
    };
  }, [ref]);

  return { isVisible };
}
