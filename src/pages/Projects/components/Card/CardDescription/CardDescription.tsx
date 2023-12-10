import { useProjectContext } from '../../../../../hooks/useProjectContext';
import * as S from './CardDescription.styles';

// type CardDescriptionProps = {
//   description: string;
// };

export function CardDescription() {
  const { project } = useProjectContext();

  return (
    <S.CardDescription>
      <p>{project.description}</p>
    </S.CardDescription>
  );
}
