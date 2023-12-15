import { useProjectContext } from '../../../../../hooks/useProjectContext';
import * as S from './CardTitle.styles';

export function CardTitle() {
  const { project } = useProjectContext();

  return <S.TitleCard>{project.title}</S.TitleCard>;
}
