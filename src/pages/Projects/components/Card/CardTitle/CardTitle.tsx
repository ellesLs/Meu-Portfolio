import * as S from './CardTitle.styles';

type CardTitleProps = {
  title: string;
};

export function CardTitle({ title = 'Projeto' }: CardTitleProps) {
  return <S.TitleCard>{title}</S.TitleCard>;
}
