import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  box-shadow: 0px 2px 3px #00000035;
  ${({ theme }) =>
    theme &&
    css`
      width: 100%;
      height: auto;
      background-color: ${theme.colors.common.white};
      position: relative;
      z-index: 999;
    `}
`;

export const ContentHeader = styled.div`
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;
