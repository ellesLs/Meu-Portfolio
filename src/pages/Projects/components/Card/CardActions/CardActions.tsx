import * as S from './CardActions.styles';

type CardActionsProps = {
  children: React.ReactNode;
};

export function CardActions({ children }: CardActionsProps) {
  return <S.ActionsContainer>{children}</S.ActionsContainer>;
}
