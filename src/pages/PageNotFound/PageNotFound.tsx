import { Link } from 'react-router-dom';
import { Wrapper } from '../../components/Area';

import ImgPage404 from './imagesPageNotFound/page404-img.png';

import { containerVariants } from '../../constants/variants';
import * as S from './PageNotFound.styles';

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
        <Wrapper>
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
        </Wrapper>
      </S.ContainerPageNotFound>
    </>
  );
}
