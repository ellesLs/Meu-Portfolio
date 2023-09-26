import * as S from './Main.styles';

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <S.ContainerMain>{children}</S.ContainerMain>;
}
