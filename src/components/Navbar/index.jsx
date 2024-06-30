// import { FaHeart } from "react-icons/fa"

import {
  Nav,
  Logo,
  SearchBar,
  SearchInput,
  SearchIcon,
  Links,
  NavLink,
  RightSection,
  Favorites,
  FavoritesIcon,
  Button,
} from "./styles"

import LogoImage from "../../assets/logo.png"

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={LogoImage} alt="logo" />
      </Logo>
      <SearchBar>
        <SearchInput type="text" placeholder="Pesquisar..." />
        <SearchIcon />
      </SearchBar>
      <Links>
        <NavLink href="#home">Início</NavLink>
        <NavLink href="#properties">Imóveis</NavLink>
        <NavLink href="#contact">Contato</NavLink>
        <NavLink href="#about">Sobre</NavLink>
      </Links>
      <RightSection>
        <Favorites>
          <FavoritesIcon />
        </Favorites>
        <Button>Entrar</Button>
        <Button $primary>Criar Conta</Button>
      </RightSection>
    </Nav>
  )
}

export default Navbar
