import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.common.black};
  color: #f8f8f8;
  /* margin-top: auto; */
  position: relative;
`;

export const ContentFooter = styled.div`
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.7rem;
  }
`;
