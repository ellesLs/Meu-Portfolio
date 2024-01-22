import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function Button({ children, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
