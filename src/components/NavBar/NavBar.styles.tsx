import styled from 'styled-components';

export const ContainerNavBar = styled.nav`
  display: block;

  @media screen and (max-width: 768px) {
    &.openMenu {
      visibility: visible;
      opacity: 1;
      height: auto;
      top: 100%;

      transition: all 700ms ease-in-out;
    }

    &:not(.openMenu) {
      visibility: hidden;
      opacity: 0;
      top: -200px;
      pointer-events: none;

      transition: all 300ms ease-in-out;
    }

    padding-block: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.common.white};

    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
    border-top: 1px solid #00000035;
    box-shadow: -3px 3px 5px #00000035;
    z-index: 996;

    position: absolute;
    right: -1.5rem;

    width: 55%;
  }

  @media screen and (max-width: 425px) {
    width: 100vw;
    right: -0.5rem;
    border-radius: 0;
  }
`;

export const ContentNavBar = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    padding-block: 1rem;

    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  @media screen and (max-width: 425px) {
    align-items: center;
  }
`;
