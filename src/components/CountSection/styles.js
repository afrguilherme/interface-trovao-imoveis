import styled from "styled-components"

export const DetailsSection = styled.div`
  margin-bottom: 20px;
`

export const OptionsWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
`

export const CountButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid rgba(60, 68, 83, 0.4);
  outline: none;
  cursor: pointer;

  color: #058690;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
    border: 1px solid #058690;
  }

  &:active {
    opacity: 1;
  }
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #3c4453;
`
