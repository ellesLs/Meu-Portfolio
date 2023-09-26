import styled from 'styled-components';

export const CardToolsContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;

  span {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    padding: 0.2rem 1rem;
    border-radius: calc(${({ theme }) => theme.borderRadius} - 0.2rem);
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (max-width: 425px) {
    justify-content: flex-start;
  }
`;
