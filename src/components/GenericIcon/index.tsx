import * as S from './GenericIcon.styles';

type GenericIconsProps = {
  icon: React.ReactNode;
  url?: string;
  handleFunc?: () => void;
};

export function GenericIcon({ icon, url, handleFunc }: GenericIconsProps) {
  if (url)
    return (
      <S.ContainerIcon href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </S.ContainerIcon>
    );

  return <S.ContainerIcon onClick={handleFunc}>{icon}</S.ContainerIcon>;
}
