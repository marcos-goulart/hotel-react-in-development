import styled from 'styled-components'
export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.white};
  width: 100% !important;
  text-align: left;

  .container {
    padding-top: 3rem !important;
  }

  @media (min-width: ${(props) => props.theme.screenMedias.sl}) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: ${(props) => props.theme.screenMedias.md}) {
    .container {
      max-width: 720px;
      width: 100%;
      padding-right: 0.75rem;
      padding-left: 0.75rem;
      margin-right: auto;
      margin-left: auto;

      .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(${(props) => props.theme.Gutters.gutterY} * -1);
        margin-right: calc(${(props) => props.theme.Gutters.gutterX} / -2);
        margin-left: calc(${(props) => props.theme.Gutters.gutterX} / -2);
      }
    }

    .copy {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.orange};
      align-items: center !important;
      justify-content: center !important;
      width: 100% !important;
      display: flex !important;
    }
  }
  @media (min-width: ${(props) => props.theme.screenMedias.lg}) {
    .container {
      max-width: 960px;
      padding-bottom: 1rem !important;
      padding-top: 3rem !important;
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
