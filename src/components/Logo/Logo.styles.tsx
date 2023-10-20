import styled from 'styled-components';

export const ContainerLogo = styled.div`
  min-height: 30px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    padding-inline: 1rem;
  }
`;

export const LogoSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
