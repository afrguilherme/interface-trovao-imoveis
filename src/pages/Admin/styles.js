import styled from "styled-components"
import { Link } from "react-router-dom"

import { FaLaptopHouse } from "react-icons/fa"
import { BsFillHouseAddFill } from "react-icons/bs"
import { BiSolidCategoryAlt } from "react-icons/bi"
import { FaUserCog } from "react-icons/fa"

export const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 20px;
  overflow-y: hidden;
`

export const Aside = styled.aside`
  width: 20%;
  height: calc(100vh - 120px);
  padding: 50px;
  border: 1px solid rgba(60, 68, 83, 0.4);
  border-radius: 20px;

  ul {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const LinkStyles = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? "#1976D2" : "#3c4453")};
  font-size: 18px;
  font-weight: 500;
`

export const PropertyLapTopIcon = styled(FaLaptopHouse)`
  font-size: 30px;
  color: ${({ selected }) => (selected ? "#1976D2" : "#3c4453")};
`

export const AddPropertyIcon = styled(BsFillHouseAddFill)`
  font-size: 30px;
  color: ${({ selected }) => (selected ? "#1976D2" : "#3c4453")};
`

export const AddCategoryIcon = styled(BiSolidCategoryAlt)`
  font-size: 30px;
  color: ${({ selected }) => (selected ? "#1976D2" : "#3c4453")};
`

export const UserConfigIcon = styled(FaUserCog)`
  font-size: 30px;
  color: ${({ selected }) => (selected ? "#1976D2" : "#3c4453")};
`

export const Main = styled.main`
  width: 80%;
  color: ${({ selected }) => (selected ? "#1976D2" : "#3c4453")};
`
