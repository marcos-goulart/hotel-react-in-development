import styled from "styled-components";
import banner from "../../img/banners/banner-home.jpeg"

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
