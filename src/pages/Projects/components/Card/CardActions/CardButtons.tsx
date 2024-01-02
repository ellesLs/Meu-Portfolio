import * as S from './CardButtons.styles';

type CardButtonsProps = {
  children: React.ReactNode;
};

export function CardActions({ children }: CardButtonsProps) {
  return <S.ActionsContainer>{children}</S.ActionsContainer>;
}
