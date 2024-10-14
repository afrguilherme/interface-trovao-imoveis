import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;

  h1 {
    color: #3c4453;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
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

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const CheckboxWrap = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 60%;
  min-width: 500px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #3c4453;

  font-size: 16px;
  font-weight: 500;
  color: #3c4453;
`

export const Errors = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #e00707;
`

export const TextArea = styled.textarea`
  width: 60%;
  min-width: 500px;
  padding: 12px 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #3c4453;

  font-size: 16px;
  font-weight: 500;
  color: #3c4453;
  height: 200px;
  resize: none;
`

export const Select = styled.select`
  width: 60%;
  min-width: 500px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #3c4453;

  font-size: 16px;
  font-weight: 500;
  color: #3c4453;
`
