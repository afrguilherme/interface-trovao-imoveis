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
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
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

export const EmptyContainer = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #3c4453;
  }
`
