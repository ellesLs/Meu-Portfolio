import styled, { keyframes } from 'styled-components';

const rippling = keyframes`
  to {
    opacity: 0;
    transform: scale(1.15);
  }
`;

export const ButtonScrollToTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s ease;

  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: 0.5%;
  margin-right: 0.7%;
  z-index: 998;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 1.8rem;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &.inView {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  &:not(.inView) {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translate(25px, 10px) scale(0.5, 0.5);
  }

  &:active {
    color: ${({ theme }) => theme.colors.common.black};
  }

  &:hover {
    &::before {
      content: '';
      position: absolute;
      border-radius: 50%;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;

      outline: 0.5rem solid ${({ theme }) => theme.colors.primary};

      animation: ${rippling} 2s ease infinite;
    }
  }

  &:focus-within,
  &:focus {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    margin-right: 1%;
    margin-bottom: 1%;
  }

  @media screen and (max-width: 425px) {
    margin-right: 1%;
    margin-bottom: 1.5%;
  }
`;
