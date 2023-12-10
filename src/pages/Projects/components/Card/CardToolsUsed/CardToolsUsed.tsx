import { useProjectContext } from '../../../../../Hooks/useProjectContext';
import * as S from './CardToolsUsed.styles';

// type CardToolsUsedProps = {
//   tools?: string[];
// };

export function CardToolsUsed() {
  const { project } = useProjectContext();

  return (
    <S.CardToolsContainer>
      {project.toolsUsed?.map((tool) => (
        <span key={tool}>{tool}</span>
      ))}
    </S.CardToolsContainer>
  );
}
