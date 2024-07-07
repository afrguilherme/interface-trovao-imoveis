import styled from "styled-components"
import { FaSearch, FaHeart } from "react-icons/fa"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 40px 40px;
  background: #fff2eb;
  color: #0060f6;
  height: 60px;
  z-index: 99;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  img {
    cursor: pointer;
    width: 60px;

    &:hover {
      opacity: 0.8;
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
    border: 1.5px solid #0060f6;
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
    color: #0060f6;
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
`

export const FavoritesIcon = styled(FaHeart)`
  color: #3c4453;

  &:hover {
    color: #0060f6;
  }
`

export const Button = styled.button`
  background: ${({ $primary }) => ($primary ? "#FF010B" : "#0060f6")};
  color: #fff;
  border: none;
  padding: 7px 20px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
