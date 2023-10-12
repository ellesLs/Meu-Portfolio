import { Link } from 'react-router-dom';
import { Area } from '../../components/Area';

import ImgPage404 from './imagesPageNotFound/page404-img.png';

import * as S from './PageNotFound.styles';
import { containerVariants } from '../../Constants/containerVariants';

export function PageNotFound() {
  return (
    <>
      <S.ContainerPageNotFound
        key="pageNotFound"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Area>
          <S.ContentPageNotFound>
            <img src={ImgPage404} alt="page not found" />
            <p>Pagina não encontrada!</p>
            <span>
              <Link to="/">Back to Home!</Link>
            </span>
          </S.ContentPageNotFound>
          <S.ContainerDesigned>
            <a href="http://www.freepik.com" rel="noopener noreferrer" target="_blank">
              Image designed by stories / Freepik
            </a>
          </S.ContainerDesigned>
        </Area>
      </S.ContainerPageNotFound>
    </>
  );
}
