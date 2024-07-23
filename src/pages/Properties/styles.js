import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  padding: 0 20px;
`

export const Aside = styled.div`
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
`

export const PropertiesContainer = styled.div`
  width: 80%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
