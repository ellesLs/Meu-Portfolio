import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: calc(100% / 2 - 3rem);
  box-shadow: 0 0 10px #00000016;
  border-radius: 1.8rem;
  padding-block: 1rem 2rem;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.common.white};

  display: flex;
  flex-direction: column;
  align-self: normal;
  gap: 0.5rem;

  @media screen and (max-width: 850px) {
    max-width: 800px;
  }
`;
