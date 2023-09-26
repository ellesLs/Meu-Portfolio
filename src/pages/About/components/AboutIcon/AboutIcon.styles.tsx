import styled, { keyframes } from 'styled-components';

const isBouncing = keyframes`
    to {
        transform: translateY(-5%);
    }
`;

export const ContainerAboutIcon = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* cursor: pointer; */

  &:hover,
  :focus-within {
    animation: ${isBouncing} 1s ease-in-out alternate infinite;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 300ms ease-in-out;

    span {
      color: ${({ theme }) => theme.colors.primary};
      transition: all 300ms ease-in-out;
    }
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.common.darkGray};
  }

  svg {
    width: 5rem;
    height: 5rem;
    filter: drop-shadow(1px 3px 1px rgba(0, 0, 0, 0.205));
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 7rem;
      height: 7rem;
    }
  }
`;
