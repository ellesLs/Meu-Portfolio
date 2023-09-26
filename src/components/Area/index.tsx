import * as S from './Area.styles';

type AreaProps = {
  children: React.ReactNode;
};

export function Area({ children }: AreaProps) {
  return <S.ContainerArea>{children}</S.ContainerArea>;
}
