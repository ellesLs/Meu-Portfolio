import * as S from './GenericIcon.styles';

type GenericIconProps = {
  icon: React.ReactNode;
  url?: string;
  onClick?: () => void;
};

export function GenericIcon({ icon, url, onClick }: GenericIconProps) {
  if (url)
    return (
      <S.ContainerIcon href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </S.ContainerIcon>
    );

  return <S.ContainerIcon onClick={onClick}>{icon}</S.ContainerIcon>;
}
