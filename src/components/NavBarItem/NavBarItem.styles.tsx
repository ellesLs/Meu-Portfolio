import styled, { css } from 'styled-components';

export const ItemNavBar = styled.li`
  ${({ theme }) =>
    theme &&
    css`
      height: 100%;

      a {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        font-size: 1.5rem;
        letter-spacing: 0.12ch;
        font-weight: 600;
        text-shadow: 1px 1px 1px #00000040;

        height: 3.4rem;
        padding-inline: 1rem;
        color: ${theme.colors.text};
        border-radius: ${({ theme }) => theme.borderRadius};

        transition: background-color 400ms cubic-bezier(0.05, 0, 0, 1),
          box-shadow 200ms cubic-bezier(0.05, 0, 0, 1);

        svg {
          color: ${theme.colors.primary};
        }

        &.nav_item_active {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.common.white};
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
          overflow: hidden;

          svg {
            color: ${theme.colors.common.white};
          }

          :after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.09);
            border-radius: ${({ theme }) => theme.borderRadius};
            z-index: -1;

            transform: scaleX(0);
            transform-origin: right;
            transition: transform 300ms ease-in;
          }
        }

        @media (hover: hover) {
          &.nav_item_active {
            :hover,
            :focus-within {
              :after {
                transform: scaleX(1);
                transform-origin: left;
              }
            }
          }

          :is(:hover, :focus-within):not(.nav_item_active) {
            background-color: ${theme.colors.common.lightGray};
            box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2), 0 0 3px ${theme.colors.common.black},
              0 0 1px inset ${theme.colors.common.white};
          }
        }

        :focus {
          background-color: auto;
        }

        /* @media (hover: none) {
          background-color: ${theme.colors.common.lightGray};
          box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2), 0 0 3px ${theme.colors.common.black},
            0 0 1px inset ${theme.colors.common.white};
        } */
      }

      @media screen and (max-width: 768px) {
        padding-inline: 1.5rem;
      }
    `}
`;
