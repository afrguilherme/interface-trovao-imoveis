import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  padding: 0 0 20px 20px;
  overflow-y: hidden;
`

export const PropertiesContainer = styled.div`
  width: 80%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  padding: 0 20px;
  outline: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  // Estilos do "trilho" da barra de rolagem.
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
    height: 800px;
  }

  // Estilos do "puxador" da barra de rolagem.
  &::-webkit-scrollbar-thumb {
    background-color: rgba(60, 68, 83, 0.4);
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }

  // Estilos da barra quando está em hover .
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(60, 68, 83, 0.8);
  }
`
