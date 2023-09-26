import { Link } from 'react-router-dom';
import { Area } from '../../components/Area';

import ImgPage404 from './images/page404-img.png';

import * as S from './PageNotFound.styles';

export function PageNotFound() {
  return (
    <>
      <S.ContainerPageNotFound
        initial={{ width: '100%', opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        exit={{ x: window.innerWidth, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'backIn' }}
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
