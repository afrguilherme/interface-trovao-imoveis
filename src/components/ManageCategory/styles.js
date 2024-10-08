import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    color: #3c4453;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px 0 80px 0;
  overflow-y: hidden;
`

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
`

export const RegisterWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const EditWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .bottom-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .bottom {
    display: flex;
  }
`

export const Input = styled.input`
  width: 80%;
  min-width: 500px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #3c4453;

  font-size: 16px;
  font-weight: 500;
  color: #3c4453;
`

export const TableContainer = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 50px;
`

export const TableHeader = styled.div`
  display: grid;
  font-weight: bold;
  border-radius: 8px;
  align-items: center;
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`

export const TableData = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;

  color: #3c4453;
`

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  color: #3c4453;
  font-size: 18px;
  margin-right: 8px;

  &:hover {
    color: #058690;
  }

  &:active {
    opacity: 0.8;
  }
`
