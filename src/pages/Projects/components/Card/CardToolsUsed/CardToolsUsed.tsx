import * as S from './CardToolsUsed.styles';

type CardToolsUsedProps = {
  tools?: string[];
};

export function CardToolsUsed({ tools }: CardToolsUsedProps) {
  return (
    <S.CardToolsContainer>
      {tools?.map((tool) => (
        <span key={tool}>{tool}</span>
      ))}
    </S.CardToolsContainer>
  );
}
