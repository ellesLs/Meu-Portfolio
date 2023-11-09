import * as S from './Wrapper.styles';

type AreaProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: AreaProps) {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>;
}
