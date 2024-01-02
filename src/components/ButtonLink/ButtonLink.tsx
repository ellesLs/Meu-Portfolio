import { Link } from 'react-router-dom';
import * as S from './ButtonLink.styles';
import { AnchorHTMLAttributes } from 'react';

type ButtonLinkProps = {
  children: React.ReactNode;
  url: string;
  isInternalLink?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({ children, url = '', isInternalLink, ...rest }: ButtonLinkProps) {
  if (isInternalLink)
    return (
      <S.ButtonGeneric as={Link} to={url} {...rest}>
        {children}
      </S.ButtonGeneric>
    );

  return (
    <S.ButtonGeneric href={url} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </S.ButtonGeneric>
  );
}
