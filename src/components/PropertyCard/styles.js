import styled from "styled-components"
import { FaTrashAlt, FaHeart } from "react-icons/fa"

export const StylePropertyCard = styled.div`
  width: 100%;
  min-height: 250px;
  max-height: 200px;
  border: 1px solid rgba(60, 68, 83, 0.4);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  p {
    color: #3c4453;
    font-size: 16px;
    font-weight: 500;
  }

  .left-section {
    display: flex;
    gap: 20px;
  }

  .property-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 450px;
  }

  img {
    max-width: 200px;
    border-radius: 20px;
  }

  &:hover {
    opacity: 0.9;
  }
`

export const DeleteIcon = styled(FaTrashAlt)`
  color: #3c4453;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`

export const FavoriteStyles = styled(FaHeart)`
  color: ${(props) => (props.isFavorite ? "#e00707" : "#3c4453")};
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`
