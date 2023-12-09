import styled from 'styled-components';

export const CardDescription = styled.div`
  flex: 1;
  margin-block: 2rem 1rem;
  max-height: 8rem;
  overflow-y: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  p {
    /* font-size: 1.7rem; */
    font-weight: 500;
    word-spacing: 2px;
    color: ${({ theme }) => theme.colors.common.darkGray};
  }

  //ScrollBar firefox

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} rgb(241, 241, 241);

  //For Anothers Browsers

  &::-moz-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.common.lightGray};
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  ::-webkit-scrollbar-button:vertical {
    display: none;
  }
`;
