import styled from "styled-components"
import Carousel from "react-elastic-carousel"

export const Container = styled.div`
  height: max-content;
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
  min-width: 500px;
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

  margin: 20px 0;
`

export const Description = styled.p`
  width: 100%;
  color: #3c4453;
  font-size: 16px;
  font-weight: 400;

  margin-top: 8px;
`

export const RightSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;

  .details-wrap {
    width: 87%;
  }

  .topic-value {
    color: #3c4453;
    font-size: 16px;
    font-weight: 400;

    margin-top: 8px;
  }
`

export const DownDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 20px;
  width: 100%;
  margin-top: 20px;

  .topic-value {
    margin-top: 8px;
    color: #3c4453;
    font-size: 16px;
    font-weight: 400;
  }
`

export const Topic = styled.p`
  color: #3c4453;
  font-size: 16px;
  font-weight: 500;
`
