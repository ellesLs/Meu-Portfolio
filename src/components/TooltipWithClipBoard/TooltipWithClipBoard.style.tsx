import styled, { css } from 'styled-components';

type ContainerClipedBoardProps = {
  IsCopied: boolean;
};

export const ContainerClipBoard = styled.div<ContainerClipedBoardProps>`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus-visible {
    i {
      visibility: visible;
      opacity: 1;
    }

    *:not(i) {
      background-color: ${({ theme }) => theme.colors.primary};
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.secondary} 100%
      );
      color: ${({ theme }) => theme.colors.common.white};
    }
  }

  i {
    visibility: hidden;
    min-width: 180px;
    background-color: #555;
    color: ${({ theme }) => theme.colors.common.white};
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: -128%;
    opacity: 0;
    transition: opacity 0.3s;
    padding: 0.7rem 0.5rem;
    font-size: 1.2rem;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
  }

  @media (pointer: fine) {
    ${({ IsCopied }) =>
      IsCopied &&
      css`
        &:hover,
        &:focus-visible {
          *:not(i) {
            background-color: ${({ theme }) => theme.colors.common.checkGreen};
            background: linear-gradient(
              90deg,
              ${({ theme }) => theme.colors.common.checkGreen} 0%,
              ${({ theme }) => theme.colors.common.checkGreen} 100%
            );
            color: ${({ theme }) => theme.colors.common.white};
          }
        }
      `}
  }

  @media (pointer: coarse) {
    ${({ IsCopied }) =>
      IsCopied &&
      css`
        i {
          visibility: visible;
          opacity: 1;
        }
        &:hover,
        &:focus-visible {
          *:not(i) {
            background-color: ${({ theme }) => theme.colors.common.checkGreen};
            background: linear-gradient(
              90deg,
              ${({ theme }) => theme.colors.common.checkGreen} 0%,
              ${({ theme }) => theme.colors.common.checkGreen} 100%
            );
            color: ${({ theme }) => theme.colors.common.white};
          }
        }
      `}
  }
`;
