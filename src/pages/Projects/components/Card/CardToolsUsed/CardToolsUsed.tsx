import { useProjectContext } from '../../../../../hooks/useProjectContext';
import * as S from './CardToolsUsed.styles';

export function CardToolsUsed() {
  const { project } = useProjectContext();

  return (
    <S.CardToolsContainer>
      <h3>Tecnologias Usadas</h3>
      <S.CardToolsContent>
        {project.toolsUsed?.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </S.CardToolsContent>
    </S.CardToolsContainer>
  );
}
