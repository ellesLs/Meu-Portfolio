import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const showIntroduction = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%)
  }
`;

// const showImage = keyframes`
//   from {
//     opacity: 0;
//   }
// `;

/* animation: ${showImage} 1.5s ease-in-out forwards; */

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
  width: 100%;
  margin-top: 0.8rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 425px) {
    margin-top: 0;
  }
`;

export const ContentHome = styled.div`
  --sizeInnerContent: 370px;

  width: 100%;
  min-height: 90vh;

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
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
    animation: ${showIntroduction} 1.8s forwards;
  }

  p {
    letter-spacing: -0.1rem;
    font-size: 3rem;
    margin-block: 1.5rem;
    animation: ${showIntroduction} 2s forwards;
  }

  strong {
    font-size: 3.8rem;
    font-weight: 900;

    color: ${({ theme }) => theme.colors.primary};
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

  animation: ${showIntroduction} 2.2s forwards;

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
