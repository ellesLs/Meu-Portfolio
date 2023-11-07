import { useState } from 'react';
import { Modal } from '../../../../../components/Modal';
import * as S from './CardImages.styles';

type CardImagesProps = {
  desktop: string;
  mobile?: string;
  alt: string;
  hasModal?: boolean;
};

export function CardImages({ desktop, mobile, alt, hasModal }: CardImagesProps) {
  const [isOpenModalDesktop, setIsOpenModalDesketop] = useState(false);
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);

  const handleClickOpenModalDesktop = () => setIsOpenModalDesketop(!isOpenModalDesktop);
  const handleClickOpenModalMobile = () => setIsOpenModalMobile(!isOpenModalMobile);

  return (
    <>
      <S.CardImgsContainer>
        <S.CardImg
          src={`/src/assets/images/projectsImgs/${desktop}.png`}
          alt={`${alt} desktop image`}
          onClick={handleClickOpenModalDesktop}
          hasModal={hasModal}
        />
        {mobile && (
          <S.CardImg
            src={`/src/assets/images/projectsImgs/${mobile}.png`}
            alt={`${alt} mobile image`}
            onClick={handleClickOpenModalMobile}
            hasModal={hasModal}
          />
        )}
      </S.CardImgsContainer>

      {hasModal && (
        <>
          <Modal
            image={desktop}
            isOpen={isOpenModalDesktop}
            setIsOpen={handleClickOpenModalDesktop}
          />
          <Modal image={mobile} isOpen={isOpenModalMobile} setIsOpen={handleClickOpenModalMobile} />
        </>
      )}
    </>
  );
}
