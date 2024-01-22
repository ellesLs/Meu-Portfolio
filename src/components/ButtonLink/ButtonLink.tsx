import { AnchorHTMLAttributes } from 'react';
import { Button } from '../Button';

import * as S from './ButtonLink.styles';

type ButtonLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  url: string;
  onClick?: () => void;
  as?: React.ElementType;
};

export function ButtonLink({ children, url = '', onClick, ...rest }: ButtonLink) {
  return (
    <Button onClick={onClick} tabIndex={-1}>
      <S.ButtonLink href={url} rel="noopener noreferrer" {...rest}>
        {children}
      </S.ButtonLink>
    </Button>
  );
}
