import styled from "styled-components"
import Carousel from "react-elastic-carousel"
import { FaHeart } from "react-icons/fa"

export const CarouselStyles = styled(Carousel)`
  width: 100%;
  padding: 60px 20px;
  display: flex;

  .VscMY {
    background-color: rgba(5, 134, 144, 30%);
  }

  .cYiiyC {
    color: #058690;

    &:hover {
      background-color: #058690;
    }
  }

  .gcIOjI:disabled {
    cursor: default;
  }

  .sc-imWZod {
    box-shadow: 0 0 1px 3px rgba(5, 134, 144, 1);
  }
`

export const Property = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(3, 25, 68, 35%);
  border-radius: 20px;
  padding: 10px;
  outline: none;

  img {
    max-width: 300px;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  h3 {
    margin-top: 5px;
    color: #3c4453;
    cursor: pointer;
  }
`

export const NeighborhoodButton = styled.button`
  background-color: #fff;
  color: #058690;
  border: 1px solid #058690;
  border-radius: 7px;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #058690;
    border: 1px solid #058690;
    color: #fff;
  }
`

export const BottomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 42px;

  p {
    color: rgb(3, 25, 68, 1);
    font-size: 18px;
  }
`

export const FavoriteStyles = styled(FaHeart)`
  color: #3c4453;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`
