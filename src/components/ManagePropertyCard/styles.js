import styled from "styled-components"

import { FaEdit, FaTrashAlt } from "react-icons/fa"

export const Container = styled.div`
  width: 100%;
  max-width: 80vw;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr 2fr 1fr;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
  font-size: 18px;
  color: #3c4453;
  gap: 50px;

  p {
    text-align: left;
  }
`

export const PropertyContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr 2fr 1fr;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
  gap: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 60px;
    border-radius: 5px;
  }
`

export const EmptyContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #3c4453;
  }
`

export const InfoWrap = styled.div`
  display: contents;

  p {
    font-size: 18px;
    font-weight: 400;
    color: #3c4453;
  }
`

export const InteractionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 18px;

  pointer-events: none;
`

export const EditIcon = styled(FaEdit)`
  &:hover {
    color: #058690;
  }

  &:active {
    opacity: 1;
  }
`

export const DeleteIcon = styled(FaTrashAlt)`
  &:hover {
    color: #058690;
  }

  &:active {
    opacity: 1;
  }
`
