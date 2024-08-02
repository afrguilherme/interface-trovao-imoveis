import styled from "styled-components"

import { FaHeart } from "react-icons/fa"

export const Property = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(60, 68, 83, 0.4);
  border-radius: 20px;
  padding: 10px;
  outline: none;
  cursor: pointer;

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
  width: 90%;
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

export const FavoriteStyles = styled(FaHeart)`
  color: #3c4453;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #e00707;
  }
`

export const BottomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  p {
    color: rgb(3, 25, 68, 1);
    font-size: 18px;
  }
`
