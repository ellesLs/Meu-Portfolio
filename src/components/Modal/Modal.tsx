import * as S from './Moda.styles.tsx';

type ModalProps = {
  image?: string;
  isOpen: boolean;
  setIsOpen?: () => void;
};

export function Modal({ image, isOpen, setIsOpen }: ModalProps) {
  if (isOpen)
    return (
      <S.ContainerModal onClick={setIsOpen} aria-modal>
        <S.ContentModal>
          <img src={`/assets/images/projectsImgs/${image}.png`} alt="img Modal" />
        </S.ContentModal>
      </S.ContainerModal>
    );

  return null;
}
