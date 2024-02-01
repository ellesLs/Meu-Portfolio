import { AnchorHTMLAttributes } from 'react';

import * as S from './Button.styles';

type ButtonLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  url: string;
  as?: React.ElementType;
};

export function ButtonLink({ children, url = '', ...rest }: ButtonLink) {
  return (
    <S.ButtonLink href={url} rel="noopener noreferrer" {...rest}>
      {children}
    </S.ButtonLink>
  );
}
