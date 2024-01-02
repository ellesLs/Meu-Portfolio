import * as S from './CardActions.styles';

type CardButtonsProps = {
  children: React.ReactNode;
};

export function CardActions({ children }: CardButtonsProps) {
  return <S.ActionsContainer>{children}</S.ActionsContainer>;
}
