import styled from 'styled-components'

export const Main = styled.main`
  width: 100% !important;
  padding-bottom: 1.5rem !important;

  .container {
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    padding-top: 3rem !important;
    padding-bottom: 0.5rem !important;
  }

  .title {
    margin-bottom: 3rem !important;
    width: 100% !important;

    h1 {
      text-align: center !important;
      font-weight: 700 !important;
      font-size: calc(1.275rem + 0.3vw) !important;
      margin-bottom: 0.5rem !important;
      margin-top: 0;
      line-height: 1.2;
    }
  }

  .lineOrange {
    width: 70px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.orange};
    margin: 0.5rem auto 0;
  }

  .row {
    row-gap: ${(props) => props.theme.Gutters.gutterX};
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-top: calc(${(props) => props.theme.Gutters.gutterY} * -1);
    margin-right: calc(${(props) => props.theme.Gutters.gutterX} / -2);
    margin-left: calc(${(props) => props.theme.Gutters.gutterX} / -2);
    padding-top: 1rem;
  }

  .col {
    flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(${(props) => props.theme.Gutters.gutterX} / 2);
    padding-left: calc(${(props) => props.theme.Gutters.gutterX} / 2);
    margin-top: ${(props) => props.theme.Gutters.gutterY};
    margin-bottom: 1.5rem !important;
    display: flex;
  }

  .card {
    border-width: 0 !important;
    border: 0 !important;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${(props) => props.theme.colors.white};
    background-clip: border-box;
    border-radius: 0.25rem;
    padding: 0.5rem !important;
    width: 100%;
    height: 100%;
  }

  .cardBody {
    flex: 1 1 auto;
    padding: 1rem;
    text-align: left;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
    }

    p {
      margin-top: 0.5rem;
      margin-bottom: 0;
      color: ${(props) => props.theme.colors.phColor};
    }
  }

  .header {
    margin-bottom: 0.75rem !important;
  }

  .stars {
    display: flex;
    gap: 0.2rem;
    margin-top: 0.5rem;
  }

  .star {
    display: inline-flex;
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme.colors.yellow};
  }

  .star svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    display: block;
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
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;

    .container {
      max-width: 960px;
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .col {
      width: 33.3333333333%;
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.xl}) {
    .container {
      max-width: 1140px;
    }

    .title h1 {
      font-size: 1.5rem !important;
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.xxl}) {
    .container {
      max-width: 1320px;
    }
  }
`
