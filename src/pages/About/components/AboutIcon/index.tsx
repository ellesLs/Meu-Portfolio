import * as S from './AboutIcon.styles';

type AboutIconProps = {
  name: string;
  icon: React.ReactNode;
};

export function AboutIcon({ name, icon }: AboutIconProps) {
  return (
    <S.ContainerAboutIcon>
      <span>{name}</span>
      {icon}
    </S.ContainerAboutIcon>
  );
}
