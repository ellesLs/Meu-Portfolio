import styled, { css } from 'styled-components';

type MenuMobileProps = {
  isOpen: boolean;
};

export const ContainerMenuMobile = styled.button<MenuMobileProps>`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 35px;
    height: 35px;
    padding: 0.5rem 0.7rem;
    background-color: ${({ theme }) => theme.colors.common.lightGray};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    box-shadow: 1px 2px 5px #00000040;
    cursor: pointer;

    .burger,
    .burger:before,
    .burger:after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.common.black};
      transition: all 0.4s ease-in;
      box-shadow: 1px 1px 2px #00000040;
    }

    .burger:before {
      transform: translateY(-6px);
    }

    .burger:after {
      transform: translateY(3px);
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        .burger {
          box-shadow: 1px 1px 3px #00000040;
          transform: rotate(-45deg);
        }
        .burger:before {
          opacity: 0;
        }
        .burger:after {
          box-shadow: 0px 1px 3px #00000040;
          transform: translateY(-3px) rotate(90deg);
        }
      `}

    @media screen and (max-width: 425px) {
      margin-right: 1rem;
    }
  }
`;
