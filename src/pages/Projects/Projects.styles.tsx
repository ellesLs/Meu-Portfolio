import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerProjects = styled(motion.section)`
  flex: 1;

  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;

  margin-block: 2rem;

  h2 {
    text-transform: uppercase;
    text-align: center;
    padding-block: 1rem;
  }
`;

export const ContentProjects = styled.div`
  width: 100%;
  /* min-height: 90vh; */
  /* background-color: ${({ theme }) => theme.colors.common.lightGray}; */
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding-block: 1.5rem;
  box-shadow: 0 3px 5px #00000071;
  padding-inline: 0;

  @media screen and (max-width: 850px) {
    padding-inline: 1.5rem;
  }

  @media screen and (max-width: 425px) {
    padding-inline: 0.5rem;
  }
`;
