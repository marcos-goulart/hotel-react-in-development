import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface ContainerProps {
  isMenuOpen: boolean
}

export const NavContainer = styled.nav<ContainerProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  background-color: ${(props) => props.theme.colors.bgColor} !important;

  .container {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.25rem 0.75rem !important;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;

    a {
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: 1rem;
      font-size: ${(props) => props.theme.fontSize.xl};
      font-weight: ${(props) => props.theme.fontWeight.bold} !important;
      color: inherit;
      text-decoration: none;
      white-space: nowrap;
    }

    button {
      padding: 0.25rem 0.75rem;
      font-size: ${(props) => props.theme.fontSize.xl};
      line-height: 1;
      background-color: transparent;
      border: transparent;
      border-radius: 0.25rem;
      border-style: none;

      color: ${(props) => props.theme.colors.black2};
      border-color: ${(props) => props.theme.colors.black3};
      cursor: pointer;

      transition: box-shadow 0.15s ease-in-out;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .navbar-collapse {
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-top: 0;

      .desktop-button {
        display: none;
      }

      ${({ isMenuOpen }) =>
        isMenuOpen
          ? css`
              .navbar-collapse {
                display: flex;
              }
            `
          : css`
              .navbar-collapse {
                display: none;
              }
            `}

      .mobile-button {
        padding: 0.5rem 0;
      }

      .btn-orange {
        color: ${(props) => props.theme.colors.white} !important;
        background-color: ${(props) => props.theme.colors.orange};
        font-size: ${(props) => props.theme.fontSize.base};
        font-weight: ${(props) => props.theme.fontWeight.normal} !important;

        cursor: pointer;
        outline: none;
        box-shadow: none;
        border-radius: 0 !important;
        width: 100% !important;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;

        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:hover {
          background-color: ${(props) => props.theme.colors.orange2};
        }
      }
    }
  }
  @media (min-width: ${(props) => props.theme.screenMedias.sl}) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: ${(props) => props.theme.screenMedias.md}) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.lg}) {
    flex-flow: nowrap;
    justify-content: flex-start;

    .container {
      max-width: 960px;

      button {
        display: none;
      }

      .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
        justify-content: flex-end !important;

        ul {
          flex-direction: row;

          .mobile-button {
            display: none !important;
          }

          .desktop-button {
            display: block !important;

            a {
              padding-left: 3rem;
              padding-right: 3rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.xl}) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.xxl}) {
    .container {
      max-width: 1320px;
    }
  }
`
export const Button = styled(Link)``
