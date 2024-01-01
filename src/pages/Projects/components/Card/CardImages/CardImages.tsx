import { useState } from 'react';
import { Modal } from '../../../../../components/Modal';
import { useProjectContext } from '../../../../../hooks/useProjectContext';

import * as S from './CardImages.styles';

export function CardImages() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>();

  const { project } = useProjectContext();

  const handleClickOpenModal = (image: string | undefined) => {
    setCurrentImage(image);
    setIsOpenModal((prevIsOpen) => window.innerWidth > 425 && !prevIsOpen);
  };

  return (
    <>
      <S.CardImgsContainer>
        <S.CardImg
          src={`/assets/images/projectsImgs/${project.images.desktopImg}.png`}
          alt={`${project.title} desktop image`}
          onClick={() => handleClickOpenModal(project.images.desktopImg)}
          hasModal={project.modal}
          loading="eager"
        />
        {project.images.mobileImg && (
          <S.CardImg
            src={`/assets/images/projectsImgs/${project.images.mobileImg}.png`}
            alt={`${project.title} mobile image`}
            onClick={() => handleClickOpenModal(project.images.mobileImg)}
            hasModal={project.modal}
            loading="eager"
          />
        )}
      </S.CardImgsContainer>

      {project.modal && (
        <Modal
          image={currentImage}
          isOpen={isOpenModal}
          setIsOpen={() => handleClickOpenModal(currentImage)}
        />
      )}
    </>
  );
}
