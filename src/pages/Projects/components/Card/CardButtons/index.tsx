import * as S from './CardButtons.styles';

type CardButtonsProps = {
  children: React.ReactNode;
};

export function CardButtons({ children }: CardButtonsProps) {
  return <S.BtnsContainer>{children}</S.BtnsContainer>;
}
