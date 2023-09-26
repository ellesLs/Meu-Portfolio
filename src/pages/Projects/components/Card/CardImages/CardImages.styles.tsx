import styled from 'styled-components';

type CardImgProps = {
  hasModal?: boolean;
};

export const CardImgsContainer = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardImg = styled.img<CardImgProps>`
  max-width: 100%;
  height: 100%;

  object-fit: contain;

  &:nth-child(2) {
    max-width: 55%;
    max-height: 55%;
    position: absolute;
    left: 10px;
    bottom: 5px;

    @media screen and (max-width: 550px) {
      display: none;
    }
  }

  @media screen and (min-width: 426px) {
    cursor: ${({ hasModal }) => (hasModal ? 'zoom-in' : '')};
  }
`;
