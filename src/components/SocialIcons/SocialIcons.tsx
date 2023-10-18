import * as S from './SocialIcons.styles';

type SocialIconsProps = {
  isColumn?: boolean;
  children: React.ReactNode;
};

export function SocialIcons({ isColumn = false, children }: SocialIconsProps) {
  return <S.ContainerSocial isColumn={isColumn}>{children}</S.ContainerSocial>;
}
