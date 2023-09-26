import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {transform:scale(0)} 
  to {transform:scale(1)}
`;

export const ContainerModal = styled.section`
  display: none;

  @media screen and (min-width: 426px) {
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
    position: fixed;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
  }
`;

export const ContentModal = styled.div`
  position: fixed;
  animation: ${zoomIn} 0.6s;

  img {
    width: 100%;
    height: 95vh;
    object-fit: contain;
    cursor: zoom-out;
  }
`;
