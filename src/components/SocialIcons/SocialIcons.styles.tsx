import styled from 'styled-components';

type ContainerSocialProps = {
  isColumn: boolean;
};

export const ContainerSocial = styled.div<ContainerSocialProps>`
  max-width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
`;
