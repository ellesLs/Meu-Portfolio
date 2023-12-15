import { useState } from 'react';
import { Modal } from '../../../../../components/Modal';
import * as S from './CardImages.styles';
import { useProjectContext } from '../../../../../hooks/useProjectContext';

export function CardImages() {
  const [isOpenModalDesktop, setIsOpenModalDesketop] = useState(false);
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);

  const handleClickOpenModalDesktop = () => setIsOpenModalDesketop(!isOpenModalDesktop);
  const handleClickOpenModalMobile = () => setIsOpenModalMobile(!isOpenModalMobile);

  const { project } = useProjectContext();

  return (
    <>
      <S.CardImgsContainer>
        <S.CardImg
          src={`/assets/images/projectsImgs/${project.images.desktopImg}.png`}
          alt={`${project} desktop image`}
          onClick={handleClickOpenModalDesktop}
          hasModal={project.modal}
          loading="eager"
        />
        {project.images.mobileImg && (
          <S.CardImg
            src={`/assets/images/projectsImgs/${project.images.mobileImg}.png`}
            alt={`${project.title} mobile image`}
            onClick={handleClickOpenModalMobile}
            hasModal={project.modal}
          />
        )}
      </S.CardImgsContainer>

      {project.modal && (
        <>
          <Modal
            image={project.images.desktopImg}
            isOpen={isOpenModalDesktop}
            setIsOpen={handleClickOpenModalDesktop}
          />
          <Modal
            image={project.images.mobileImg}
            isOpen={isOpenModalMobile}
            setIsOpen={handleClickOpenModalMobile}
          />
        </>
      )}
    </>
  );
}
