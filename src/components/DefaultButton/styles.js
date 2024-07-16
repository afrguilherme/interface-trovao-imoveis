import styled from "styled-components"

export const Button = styled.button`
  background: ${({ $primary }) => ($primary ? "#031944" : "#058690")};
  color: #fff;
  border: none;
  outline: none;
  padding: 7px 20px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
