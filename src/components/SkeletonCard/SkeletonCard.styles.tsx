import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`;

export const RootSkeleton = styled.div`
  width: calc(100% / 2 - 3rem);
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 10px #00000016;
  padding-block: 2rem 2rem;
  padding-inline: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  * {
    animation: ${pulse} 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const TittleSkeleton = styled.div`
  width: 40%;
  height: 2.5rem;
  margin-block: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.common.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  align-self: center;
`;

export const ImageSkeleton = styled.div`
  max-width: 100%;
  height: 30rem;
  max-height: 300px;
  background-color: ${({ theme }) => theme.colors.common.lightGray};
  border-radius: 1.5rem;
`;

export const TextSkeleton = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  div {
    width: 100%;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.common.lightGray};
    border-radius: ${({ theme }) => theme.borderRadius};

    :nth-child(1) {
      width: 96%;
    }
    :nth-child(2) {
      width: 98%;
    }
  }
`;

export const ButtonsSkeleton = styled.div`
  width: 40%;
  height: auto;

  display: flex;
  gap: 0.7rem;

  div {
    width: 100%;
    max-width: 8rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.common.lightGray};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
