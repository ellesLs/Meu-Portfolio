import { Link } from 'react-router-dom';
import * as S from './ButtonLink.styles';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonLinkProps = {
  children: React.ReactNode;
  url: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isInternalLink?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  children,
  url = '',
  type = 'button',
  isInternalLink,
  ...rest
}: ButtonLinkProps) {
  if (isInternalLink)
    return (
      <S.ButtonGeneric as={Link} to={url} type={type} {...rest}>
        {children}
      </S.ButtonGeneric>
    );

  return (
    <S.ButtonGeneric href={url} target="_blank" rel="noopener noreferrer" type={type} {...rest}>
      {children}
    </S.ButtonGeneric>
  );
}
