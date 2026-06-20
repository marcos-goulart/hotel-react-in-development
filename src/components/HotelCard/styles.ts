import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Div = styled.div<{ $isPromotion?: boolean }>`
  margin-bottom: 3rem !important;
  display: flex;
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
    width: 100%;
    height: 100%;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    color: inherit;
    cursor: pointer;
    text-decoration: none;

    .imgDiv {
      position: relative !important;

      img {
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        vertical-align: middle;
      }

      .priceBadge {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) =>
          props.$isPromotion ? props.theme.colors.darkGreen : props.theme.colors.orange};
        right: 0px;
        padding-left: 0.5rem !important;
        padding-bottom: 0.25rem !important;
        padding-right: 0.5rem !important;
        padding-top: 0.25rem !important;
        bottom: 0 !important;
        position: absolute !important;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        .priceOld {
          opacity: 0.85;
          text-decoration: line-through;
          font-size: 0.9rem;
        }

        .priceNew {
          font-weight: 700;
        }
      }
    }

    .cardBody {
      display: flex;
      flex-direction: column;
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
        margin-bottom: 0;
        flex: 1 1 auto;
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

export const CardLink = styled(Link)``
