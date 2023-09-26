import styled from 'styled-components';

export const ContainerIcon = styled.a`
  padding: 0.3rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.common.lightGray};
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.308);
  transition: all 300ms ease-out;
  cursor: pointer;

  svg {
    height: 45px;
    width: 45px;
  }

  &:hover,
  &:focus-within {
    background-color: ${({ theme }) => theme.colors.primary};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    color: ${({ theme }) => theme.colors.common.white};
    /* border-radius: ${({ theme }) => theme.borderRadius}; */
  }
`;
