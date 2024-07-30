import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 99;
`

export const ModalBox = styled.div`
  max-height: 200px;
  height: 100%;
  width: 25%;
  padding: 20px;
  background-color: #ffff;
  border-radius: 20px;
  border: 1px solid #031944;
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.32);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: #3c4453;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
