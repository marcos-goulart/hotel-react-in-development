import styled from 'styled-components'
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.25rem 0.75rem !important;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;

    .brandLink {
      order: 1;
      flex: 0 0 auto;
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: 1rem;
      font-size: ${(props) => props.theme.fontSize.xl};
      font-weight: ${(props) => props.theme.fontWeight.bold} !important;
      color: inherit;
      text-decoration: none;
      white-space: nowrap;
    }

    .menu-toggle {
      order: 3;
      flex: 0 0 auto;
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

    .nav-search-row {
      order: 2;
      flex: 1 1 10rem;
      min-width: 0;
      margin-right: 0.75rem;
    }

    .hotel-search {
      display: flex;
      align-items: stretch;
      width: 100%;
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.gray300};
      border-radius: 0.375rem;
      overflow: hidden;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    }

    .hotel-search-input {
      width: 100%;
      min-width: 0;
      border: 0;
      background-color: transparent;
      color: ${(props) => props.theme.colors.black1};
      padding: 0.75rem 1rem;
      font-family: inherit;
      font-size: ${(props) => props.theme.fontSize.base};
      border-radius: 0;
      outline: none;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      &::placeholder {
        color: ${(props) => props.theme.colors.phColor};
      }

      &:focus {
        box-shadow: none;
      }
    }

    .hotel-search:focus-within {
      border-color: ${(props) => props.theme.colors.orange};
      box-shadow: 0 0 0 3px rgba(244, 106, 5, 0.12);
    }

    .hotel-search-button {
      border: 0;
      border-left: 1px solid ${(props) => props.theme.colors.gray300};
      background-color: transparent;
      color: ${(props) => props.theme.colors.gray500};
      font-family: inherit;
      font-size: ${(props) => props.theme.fontSize.base};
      width: 3.25rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 0;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.colors.orange};
        background-color: #fff8f2;
      }

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .navbar-collapse {
    order: 4;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
    width: 100%;
    margin-top: 0.75rem;

    ul {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-top: 0;
      list-style: none;

      .nav-item {
        padding: 0.5rem 0;

        a {
          color: ${(props) => props.theme.colors.black2};
          text-decoration: none;
          font-size: ${(props) => props.theme.fontSize.base};
          transition: color 0.15s ease-in-out;

          &:hover {
            color: ${(props) => props.theme.colors.orange};
          }
        }
      }

      .mobile-home-button {
        .nav-home-link {
          background-color: ${(props) => props.theme.colors.gray200};
          border: 1px solid ${(props) => props.theme.colors.gray300};
          color: ${(props) => props.theme.colors.black1};
          width: 100%;
          display: inline-block;
          text-align: center;
          padding: 0.375rem 0.75rem;

          &:hover {
            background-color: ${(props) => props.theme.colors.gray300};
            color: ${(props) => props.theme.colors.black1};
          }
        }
      }

      .login-button-item {
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
      display: grid;
      grid-template-columns: auto minmax(18rem, 1fr) auto;
      column-gap: 1.25rem;
      max-width: 960px;
      align-items: center;

      .menu-toggle {
        display: none;
      }

      .brandLink {
        display: inline-flex;
        margin-right: 0;
      }

      .nav-search-row {
        width: 100%;
        margin-top: 0;
        margin-right: 0;
      }

      .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
        justify-content: flex-end !important;
        width: auto;
        margin-top: 0;

        ul {
          flex-direction: row;
          align-items: center;

          .nav-item {
            display: flex;
            align-items: center;
            padding: 0;
            margin-right: 2rem;
          }

          .hotel-search {
            width: 100%;
          }

          .login-button-item {
            margin-right: 0;

            a {
              padding-left: 3rem;
              padding-right: 3rem;
            }
          }

          .mobile-home-button {
            .nav-home-link {
              width: auto;
              display: inline;
              padding: 0;
              background-color: transparent;
              border: 0;
              color: ${(props) => props.theme.colors.black2};

              &:hover {
                background-color: transparent;
                color: ${(props) => props.theme.colors.orange};
              }
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
export const BrandLink = styled(Link).attrs({
  className: 'brandLink',
})``

export const NavLinkItem = styled(Link)``

export const Button = styled(Link)``

export const SearchForm = styled.form.attrs({
  className: 'hotel-search',
})``

export const SearchInput = styled.input.attrs({
  className: 'hotel-search-input',
})``

export const SearchButton = styled.button.attrs({
  className: 'hotel-search-button',
})``
