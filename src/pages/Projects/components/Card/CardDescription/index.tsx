import * as S from './CardDescription.styles';

type CardDescriptionProps = {
  description: string;
};

export function CardDescription({ description }: CardDescriptionProps) {
  return (
    <S.CardDescription>
      <p>{description}</p>
    </S.CardDescription>
  );
}
