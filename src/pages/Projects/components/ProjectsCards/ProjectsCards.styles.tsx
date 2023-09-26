import styled from 'styled-components';

export const ContainerListCards = styled.section`
  width: 100%;
  margin-block: 1.5rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1280px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    gap: 2rem 1.5rem;
  }
`;
