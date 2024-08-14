import styled from "styled-components"

export const Container = styled.div`
  width: 20%;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 30px;
`

export const FilterContainer = styled.div`
  height: 100%;
  width: 90%;
  border: 1px solid rgba(60, 68, 83, 0.4);
  border-radius: 20px;
  padding: 30px 20px;
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #3c4453;
`

export const TypeContainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(60, 68, 83, 0.4);

  select {
    width: 100%;
    padding: 8px 0;
    color: #3c4453;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
  }
`

export const ContainerDetails = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(60, 68, 83, 0.4);
`

export const CountSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
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

export const DetailsSection = styled.div`
  margin-bottom: 20px;
`
