import styled from 'styled-components'
export const Container = styled.div`
  padding-top: 1rem !important;
  margin-bottom: 1rem !important;
  align-items: flex-end !important;
  flex: 0 0 auto;
  max-width: 100%;
  padding-right: calc(${(props) => props.theme.Gutters.gutterX} / 2);
  padding-left: calc(${(props) => props.theme.Gutters.gutterX} / 2);
  margin-top: ${(props) => props.theme.Gutters.gutterY};

  button {
    display: inline-block;
    width: 100% !important;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.orange};
    border: 2px solid ${(props) => props.theme.colors.orange};
    outline: none;
    box-shadow: none;
    font-size: 1rem;
    font-family: 'Ruda', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border-radius: 0 !important;
    padding: 0.375rem 0 0.375rem 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme.colors.orange2};
      border: 2px solid ${(props) => props.theme.colors.orange2};
    }
  }

  @media (min-width: ${(props) => props.theme.screenMedias.md}) {
    flex: 0 0 auto;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.screenMedias.lg}) {
    display: flex !important;
    flex: 0 0 auto;
    width: 16.6666666667%;

    button {
      padding: 0.375rem 0 0.375rem 0;
    }
  }
`
