import styled from 'styled-components';

export const ContainerTechs = styled.section`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    text-transform: uppercase;
    /* text-decoration: underline; */
  }

  @media screen and (max-width: 425px) {
    padding-inline: 0.5rem;
  }
`;

export const ContentTechs = styled.section`
  width: min(600px, 100%);
  padding-block: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 1440px) {
    width: min(750px, 100%);
  }
`;
