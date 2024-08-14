import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  padding: 0 20px;
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
