import styled from "styled-components"

export const Container = styled.div`
  width: 20%;
  height: fit-content;
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

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #3c4453;
`

export const ContainerDetails = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(60, 68, 83, 0.4);
`

export const ValueSection = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(60, 68, 83, 0.4);
`

export const ValuesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValueDetail = styled.div`
  input {
    width: 100%;
    max-width: 80%;
    padding: 8px 0;
    border-radius: 10px;
    border: 1px solid rgba(60, 68, 83, 0.8);
    outline: none;
    padding-left: 10px;
    font-size: 16px;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
export const CheckboxSection = styled.div`
  width: 100%;
  display: flex;

  input {
    margin: 0 15px 0 5px;
    scale: 1.4;
  }

  p {
    position: relative;
    bottom: -4px;
  }
`
