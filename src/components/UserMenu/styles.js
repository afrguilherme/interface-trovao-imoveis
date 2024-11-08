import styled, { keyframes } from "styled-components"

import { LuLayoutPanelLeft } from "react-icons/lu"

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  position: absolute;
  right: 60px;
  width: 260px;
  height: max-content;
  padding: 30px 0 30px 25px;
  background-color: #ffff;
  border: 1px solid rgba(60, 68, 83, 0.4);
  outline: none;
  animation: ${slideDown} 0.3s ease forwards;

  cursor: default;
  z-index: 2;
`

export const AdminPanelIcon = styled(LuLayoutPanelLeft)`
  font-size: 20px;
`

export const AdminPanelWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 10px;
  color: #3c4453;

  cursor: pointer;

  font-size: 16px;
  font-weight: 400;

  &:hover {
    color: #058690;
  }
`
