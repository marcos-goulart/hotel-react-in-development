import styled from 'styled-components'

export const Form = styled.form`
  .row {
    row-gap: ${(props) => props.theme.Gutters.gutterX};
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(${(props) => props.theme.Gutters.gutterY} * -1);
    margin-right: calc(${(props) => props.theme.Gutters.gutterX} / -2);
    margin-left: calc(${(props) => props.theme.Gutters.gutterX} / -2);

    div {
      margin-bottom: 1rem !important;
      flex: 0 0 auto;
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(${(props) => props.theme.Gutters.gutterX} / 2);
      padding-left: calc(${(props) => props.theme.Gutters.gutterX} / 2);
      margin-top: ${(props) => props.theme.Gutters.gutterY};

      label {
        font-weight: 700;
        margin-bottom: 0.5rem;
        display: inline-block;
      }

      input {
        appearance: none;
        border: 2px solid ${(props) => props.theme.colors.bgBrown2};
        background-color: ${(props) => props.theme.colors.bgBrown2};
        border-radius: 0 !important;
        background-clip: padding-box;
        color: ${(props) => props.theme.colors.bgBrown1};
        display: block;
        font-weight: 400;
        font-size: 1rem;
        font-family: inherit;
        width: 100%;
        padding: 0.375rem 0.75rem;
        line-height: 1.5;
        -webkit-appearance: none;
        -moz-appearance: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        margin: 0;

        :focus {
          border: 2px solid ${(props) => props.theme.colors.blue};
          background-color: #fff;
          outline: none;
        }

        ::placeholder {
          color: ${(props) => props.theme.colors.phColor};
          opacity: 1;
        }
      }

      select {
        border: 2px solid ${(props) => props.theme.colors.bgBrown2};
        color: ${(props) => props.theme.colors.bgBrown1};
        background-color: ${(props) => props.theme.colors.bgBrown2};
        font-weight: 400;
        font-size: 16px;
        border-radius: 0 !important;
        display: block;
        width: 100%;
        padding: 0.375rem 1.75rem 0.375rem 0.75rem;
        line-height: 1.5;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
        appearance: none;
        text-transform: none;
        margin: 0;
        font-family: inherit;

        :focus {
          word-wrap: normal;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.md}) {
    .row {
      div {
        flex: 0 0 auto;
        width: 100%;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.lg}) {
    padding-bottom: 0.5rem !important;

    .row {
      div {
        flex: 0 0 auto;
        width: 16.6666666667%;
      }
    }

    .w-25 {
      width: 25% !important;
    }
  }
`
