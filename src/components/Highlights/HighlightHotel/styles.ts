import styled from 'styled-components'

export const Div = styled.div`
  margin-bottom: 3rem !important;
  flex: 0 0 auto;
  width: 100%;
  padding-right: calc(${(props) => props.theme.Gutters.gutterX} / 2);
  padding-left: calc(${(props) => props.theme.Gutters.gutterX} / 2);
  margin-top: ${(props) => props.theme.Gutters.gutterY};

  .card {
    border-width: 0 !important;
    border: 0 !important;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    .imgDiv {
      position: relative !important;

      img {
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);
        width: 100%;
        vertical-align: middle;
      }

      span {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.orange};
        right: 0px;
        padding-left: 0.5rem !important;
        padding-bottom: 0.25rem !important;
        padding-right: 0.5rem !important;
        padding-top: 0.25rem !important;
        bottom: 0 !important;
        position: absolute !important;
      }
    }

    .cardBody {
      padding: 1rem !important;
      flex: 1 1 auto;

      h5 {
        margin-bottom: 0.25rem !important;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.2;
        margin-top: 0;
      }

      .location {
        color: ${(props) => props.theme.colors.phColor} !important;
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .description {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      button {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.orange};
        outline: none;
        box-shadow: none;
        font-size: 1rem;
        font-family: 'Ruda', sans-serif;
        font-weight: 400;
        width: 100% !important;
        display: inline-block;
        line-height: 1.5;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;

        &:hover {
          background-color: ${(props) => props.theme.colors.orange2};
        }
      }
    }
  }
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${(props) => props.theme.screenMedias.md}) {
    flex: 0 0 auto;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.screenMedias.lg}) {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
`
