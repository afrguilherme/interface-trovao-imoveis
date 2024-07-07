import styled from "styled-components"
import Carousel from "react-elastic-carousel"

export const Container = styled.div`
  margin-top: 100px;
  height: 100vh;
  width: 100%;
  background-color: #fff2eb;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #3c4453;
  }
`

export const CarouselStyles = styled(Carousel)`
  width: 100%;
  padding: 60px 20px;

  .property-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(0, 96, 246, 35%);
    border-radius: 20px;
    padding: 10px;

    img {
      max-width: 300px;
      width: 100%;
      border-radius: 20px;
      cursor: pointer;
    }

    h3 {
      margin-top: 5px;
      color: #3c4453;
      cursor: pointer;
    }
  }

  .cVNbmB {
    background-color: #fff;
    box-shadow: 0 0 1px 3px #0060f6;
  }

  .dPtVpB {
    cursor: default;
  }

  .hYa-dfP {
    background-color: transparent;
    color: #0060f6;

    &:hover {
      background-color: #0060f6;
    }
  }
`

export const NeighborhoodButton = styled.button`
  background-color: #fff;
  color: #0060f6;
  border: 1px solid #0060f6;
  border-radius: 7px;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  /* position: absolute;
  bottom: 35px; */
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0060f6;
    border: none;
    color: #fff;
  }
`
