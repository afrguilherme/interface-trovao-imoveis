import styled from "styled-components"
import { FaSearch, FaHeart } from "react-icons/fa"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fff;
  color: #0060f6;
  height: 60px;
`

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
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
  border: 0.5px solid #3c4453;
  border-radius: 20px;
  outline: none;
`

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 20px;
  color: #aaa;
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
`

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#007BFF" : "transparent")};
  color: #fff;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${({ primary }) => (primary ? "#0056b3" : "#444")};
  }
`
