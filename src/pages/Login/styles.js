import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const BackButton = styled.button`
  position: absolute;
  top: 25px;
  left: 25px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #3c4453;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 450px;

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
`

export const RegisterOption = styled.p`
  font-size: 16px;
  color: #3c4453;
`

export const Logo = styled.div`
  button {
    border: none;
    outline: none;
  }

  img {
    cursor: pointer;
    width: 60px;
    border-radius: 10px;

    &:hover {
      opacity: 0.8;
      scale: 1.01;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 50px 10px 15px;
  border: ${(props) =>
    props.$error ? "1px solid #ff2222" : "1px solid #3c4453"};
  border-radius: 10px;
  outline: none;
  transition: border 0.5s ease;
  font-size: 16px;
`

export const Divider = styled.p`
  font-size: 16px;
  color: #3c4453;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 100px;
    height: 1px;
    background: #3c4453;
    vertical-align: middle;
    margin: 0 10px;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: #5a95f5;
  color: #fff;
  border: none;
  padding: 7px 20px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;

  img {
    width: 30px;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
