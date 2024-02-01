import styled, { css, keyframes } from 'styled-components';

const isUp = keyframes`
  to {
    transform: translateY(-5%);
  }
`;

const ripple = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1.01);
    opacity: 0;
  }
`;

const button = css`
  ${({ theme }) =>
    theme &&
    css`
      position: relative;
      min-width: 100px;
      min-height: 4rem;

      color: ${theme.colors.common.white};
      background: linear-gradient(
        90deg,
        ${theme.colors.primary} 0%,
        ${theme.colors.secondary} 100%
      );
      border-radius: ${theme.borderRadius};
      border: 0.5px solid ${theme.colors.secondary};

      font-size: 1.6rem;
      font-weight: 700;
      box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.192);
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      padding: 1rem 1.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      transition: all 300ms ease-in-out;

      &:hover,
      &:focus-within {
        /* animation: ${isUp} 600ms ease-in-out forwards alternate; */
        border-radius: 0.7rem;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        transform: scale(0);
      }

      &:hover::before,
      &:focus-within::before {
        animation: ${ripple} 1.5s ease;
        border-radius: 1rem;
      }

      &:active {
        color: ${theme.colors.primary};
        background: ${theme.colors.common.white};
        border: 0.5px solid ${theme.colors.secondary};
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        transition: all 400ms ease-out;
      }

      @media screen and (max-width: 425px) {
        /* font-size: 2rem; */
        letter-spacing: 1px;
      }
    `}
`;

export const Button = styled.button`
  ${button}
`;

export const ButtonLink = styled.a`
  ${button}
`;
