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

  return (
    <>
      <S.CardImgsContainer>
        <S.CardImg
          src={`/src/images/projectsImgs/${desktop}.png`}
          alt={`${alt} image desktop`}
          onClick={() => setIsOpenModalDesketop(true)}
          hasModal={hasModal}
        />
        {mobile && (
          <S.CardImg
            src={`/src/images/projectsImgs/${mobile}.png`}
            alt={`${alt} image mobile`}
            onClick={() => setIsOpenModalMobile(true)}
            hasModal={hasModal}
          />
        )}
      </S.CardImgsContainer>

      {hasModal && (
        <>
          <Modal
            image={desktop}
            isOpen={isOpenModalDesktop}
            setIsOpen={() => setIsOpenModalDesketop(!isOpenModalDesktop)}
          />
          <Modal
            image={mobile}
            isOpen={isOpenModalMobile}
            setIsOpen={() => setIsOpenModalMobile(!isOpenModalMobile)}
          />
        </>
      )}
    </>
  );
}
