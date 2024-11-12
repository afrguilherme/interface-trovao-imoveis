import styled from "styled-components"
import Carousel from "react-elastic-carousel"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 50px 50px;

  h1 {
    color: #3c4453;
  }
`
export const CarouselSection = styled.div`
  width: 50%;
  height: 500px;
  background-color: rgba(60, 68, 83, 0.4);
`

export const CarouselStyles = styled(Carousel)`
  width: 100%;
  padding: 0 20px;

  img {
    width: 100%;
    max-width: 500px;
  }
`
