import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 1rem !important;
  flex: 0 0 auto;
  width: 100%;
  flex-shrink: 0;
  max-width: 100%;
  padding-right: calc(${(props) => props.theme.Gutters.gutterX} / 2);
  padding-left: calc(${(props) => props.theme.Gutters.gutterX} / 2);
  margin-top: ${(props) => props.theme.Gutters.gutterY};

  h4 {
    font-weight: 700 !important;
    font-size: calc(1.275rem + 0.3vw) !important;
    margin-bottom: 0.5rem !important;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  p {
    margin-bottom: 0 !important;
    margin-top: 0;
  }

  a {
    text-decoration: none !important;
    color: ${(props) => props.theme.colors.phColor};

    :hover {
      color: ${(props) => props.theme.colors.black1};
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.md}) {
    margin-bottom: 0 !important;
    flex: 0 0 auto;
    width: 25%;

    h4 {
      margin-bottom: 1.5rem !important;
    }

    p {
      a {
        margin-right: 0.25rem !important;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.lg}) {
    margin-bottom: 0 !important;
    flex: 0 0 auto;
    width: 33.3333333333%;

    h4 {
      margin-bottom: 1.5rem !important;
    }

    p {
      a {
        margin-right: 0.5rem !important;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.xl}) {
    h4 {
      font-size: 1.5rem !important;
    }
  }
`
