import styled from "styled-components"

export const Button = styled.button`
  background: ${({ $primary }) => ($primary ? "#031944" : "#058690")};
  color: #fff;
  border: none;
  padding: 7px 20px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
