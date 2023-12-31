import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const showIntroduction = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%)
  }
`;

const showIntroductionLinks = keyframes`
  from {
    opacity: 0;
  }
`;

const float = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateY(-5px);
  }
 
  100% {
    transform: translateY(0px);
  }
`;

export const ContainerHome = styled(motion.section)`
  flex: 1;

  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 425px) {
    margin-top: 0;
  }
`;

export const ContentHome = styled.div`
  --sizeInnerContent: 385px;

  width: 100%;
  /* min-height: 90vh; */

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (max-width: 520px) {
    --sizeInnerContent: 100%;
  }
`;

export const InfoHome = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;

  opacity: 1;

  h1,
  p {
    width: min(var(--sizeInnerContent), 100%);
    color: #313131;
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: flex-start;
    gap: 0.7rem;
  }

  h1 {
    letter-spacing: -0.2rem;
    color: ${({ theme }) => theme.colors.common.black};
    font-size: clamp(3.5rem, 1vw + 2.5rem, 4.5rem);
    animation: ${showIntroduction} 0.5s forwards;
  }

  p {
    letter-spacing: -0.1rem;
    font-size: 3rem;
    margin-block: 1.5rem;
    animation: ${showIntroduction} 0.8s forwards;
  }

  strong {
    font-size: 3.8rem;
    font-weight: 900;
    padding-right: 0.5rem;

    background-color: ${({ theme }) => theme.colors.common.white};
    color: ${({ theme }) => theme.colors.primary};

    background: linear-gradient(10deg, rgba(42, 74, 187, 1) 0%, rgba(0, 56, 255, 1) 90%);
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  @media screen and (max-width: 768px) {
    h1,
    p {
      justify-content: center;
    }
  }

  @media screen and (max-width: 520px) {
    justify-content: center;

    p {
      padding-inline: 0.5rem;
    }
  }
`;

export const ContainerLinks = styled.div`
  max-width: 100%;
  width: var(--sizeInnerContent);

  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  animation: ${showIntroductionLinks} 1s forwards;

  @media screen and (max-width: 520px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export const FigureHome = styled.figure`
  width: 100%;
  opacity: 1;

  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: min(700px, 110%);
    max-width: 110%;
    object-fit: cover;

    animation: ${float} 5s infinite ease-in-out 2s;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 100%;
      max-width: 600px;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 520px) {
    display: none;
  }
`;
