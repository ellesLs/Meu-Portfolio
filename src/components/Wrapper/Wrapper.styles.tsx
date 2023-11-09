import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding-inline: 1.5rem;

  @media screen and (min-width: 1440px) {
    max-width: 137.5rem;
  }

  @media screen and (max-width: 425px) {
    padding-inline: 0.5rem;
  }
`;
