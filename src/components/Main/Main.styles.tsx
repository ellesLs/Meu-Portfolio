import styled, { keyframes } from 'styled-components';

const is_moving = keyframes`
  to {
    transform: translateX(-100px);
  }
`;

export const ContainerMain = styled.main`
  width: 100%;
  min-height: 91dvh;
  overflow-x: hidden;

  position: relative;

  &::after {
    animation: ${is_moving} 30s ease-in-out infinite alternate;

    content: '';
    height: 100%;
    width: 110%;
    position: absolute;
    top: 0;
    z-index: -1;

    background-color: ${({ theme }) => theme.colors.background};
    background-image: radial-gradient(
        ${({ theme }) => theme.colors.primary}10 0.1rem,
        transparent 0.09rem
      ),
      radial-gradient(
        ${({ theme }) => theme.colors.primary}10 0.09rem,
        ${({ theme }) => theme.colors.background} 0.09rem
      );
    background-size: 3.6rem 3.6rem;
    background-position: 0 0, 1.8rem 1.8rem;
  }

  @media screen and (min-height: 1024px) {
    min-height: 94dvh;
  }

  @media screen and (min-width: 1440px) {
    min-height: 100dvh;
  }

  @media screen and (max-width: 768px) {
    &::after {
      width: 130%;
    }
  }
`;
