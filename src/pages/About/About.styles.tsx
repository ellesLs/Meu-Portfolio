import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerAbout = styled(motion.section)`
  flex: 1;

  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
`;

export const ContentAbout = styled.div`
  width: 100%;
  /* min-height: 90vh; */

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    gap: 0;
  }
`;

export const ContainerInfoAbout = styled.section`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const FigureAbout = styled.figure`
  width: 100%;
  flex: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: gray; */

  img {
    width: 300px;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #00000050;
    object-fit: cover;
  }
`;

export const InfoAbout = styled.div`
  flex: 3;
  width: 100%;

  min-height: 180px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-inline: 2rem;
  margin-top: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  span {
    /* display: block; */
    font-size: 1.7rem;
    font-weight: 500;
  }

  p {
    max-width: 90rem;
    text-align: left;
    line-height: 2.3rem;
    /* text-wrap: balance; */
    color: ${({ theme }) => theme.colors.common.darkGray};
  }

  @media screen and (min-width: 1600px) {
    p {
      max-width: 120rem;
    }
  }
`;

export const ContainerMediaSocial = styled.section`
  width: 100%;
  padding-block: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h3 {
    padding-block: 2rem 1rem;
    text-transform: uppercase;
  }
`;
