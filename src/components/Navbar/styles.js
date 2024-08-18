import styled from "styled-components"
import { FaSearch, FaHeart, FaUser } from "react-icons/fa"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 40px 40px;
  background: #fff;
  height: 60px;
  z-index: 99;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`

export const Logo = styled.div`
  button {
    background: transparent;
    outline: none;
    border: none;
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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  max-width: 400px;
  margin: 0 20px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 50px 10px 25px;
  border: 1px solid #3c4453;
  border-radius: 20px;
  outline: none;
  transition: border 0.5s ease;

  &:hover {
    border: 1.5px solid #058690;
  }
`

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 20px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 80px;
`

export const NavLink = styled.a`
  color: #3c4453;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #058690;
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const UserRightSection = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-right: 10px;
`

export const Favorites = styled.div`
  display: flex;
  align-items: center;
`

export const FavoritesIcon = styled(FaHeart)`
  color: #3c4453;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #058690;
  }
`

export const UserIcon = styled(FaUser)`
  font-size: 20px;
`

export const UserInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  color: #3c4453;
  border-left: 1px solid #3c4453;
  padding-left: 40px;
  cursor: pointer;

  &:hover {
    .userStyles {
      color: #058690;
    }
  }
`

export const Logout = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #e00707;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

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
