import styled from "styled-components"
import Carousel from "react-elastic-carousel"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
`
export const LeftSection = styled.div`
  width: 50%;
`

export const Title = styled.h1`
  color: #3c4453;
  font-size: 2em;
  margin-bottom: 20px;
`

export const PublishInfo = styled.p`
  color: #3c4453;
  font-size: 16px;
  font-weight: 500;

  margin-bottom: 10px;
`

export const CarouselSection = styled.div`
  width: 100%;
  min-width: 40%;
  height: max-content;
  background-color: #ffffff;

  border: 1px solid rgba(60, 68, 83, 0.4);
  border-radius: 15px;
`

export const CarouselStyles = styled(Carousel)`
  width: 100%;
  padding: 0 20px;

  img {
    width: 100%;
    max-width: 500px;
  }
`

export const Price = styled.h3`
  color: #3c4453;
  font-size: 28px;

  margin-top: 20px;
`

export const Description = styled.p`
  width: 100%;
  color: #3c4453;
  font-size: 16px;
  font-weight: 500;

  margin-top: 20px;
`

export const RightSection = styled.div`
  width: 45%;

  background-color: grey;
`
