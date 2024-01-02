import * as S from './Wrapper.styles';

type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>;
}
