import { useProjectContext } from '../../../../../hooks/useProjectContext';
import * as S from './CardDescription.styles';

export function CardDescription() {
  const { project } = useProjectContext();

  return (
    <S.CardDescription>
      <p>{project.description}</p>
    </S.CardDescription>
  );
}
