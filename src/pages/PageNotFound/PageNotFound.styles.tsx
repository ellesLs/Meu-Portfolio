import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerPageNotFound = styled(motion.section)`
  width: 100%;
`;

export const ContentPageNotFound = styled.div`
  width: 100%;
  min-height: 90vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: red;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    padding-block: 2rem 2rem;
    text-decoration: underline;
  }
`;

export const ContainerDesigned = styled.div`
  width: 100%;
  margin-block: 1rem;
  font-style: italic;
  color: inherit;
`;
