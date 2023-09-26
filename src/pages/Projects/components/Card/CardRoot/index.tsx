import * as S from './CardRoot.styles';

type ProjectsCardProps = {
  children?: React.ReactNode;
};

export function CardRoot({ children }: ProjectsCardProps) {
  return <S.CardContainer>{children}</S.CardContainer>;
}
