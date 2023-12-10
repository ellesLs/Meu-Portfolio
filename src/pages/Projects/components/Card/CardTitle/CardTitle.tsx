import { useProjectContext } from '../../../../../hooks/useProjectContext';
import * as S from './CardTitle.styles';

// type CardTitleProps = {
//   title: string;
// };

export function CardTitle() {
  const { project } = useProjectContext();

  return <S.TitleCard>{project.title}</S.TitleCard>;
}
