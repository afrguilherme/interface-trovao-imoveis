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
} from "./styles"

import { useNavigate } from "react-router-dom"

import LogoImage from "../../assets/logo.png"

import DefaultButton from "../DefaultButton"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Nav>
      <Logo>
        <img src={LogoImage} alt="logo" />
      </Logo>
      <SearchBar>
        <SearchInput type="text" placeholder="Cidade, bairro, endereço..." />
        <SearchIcon />
      </SearchBar>
      <Links>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/imoveis">Imóveis</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
      </Links>
      <RightSection>
        <Favorites>
          <FavoritesIcon />
        </Favorites>
        <DefaultButton onClick={() => navigate("/login")}>Entrar</DefaultButton>
        <DefaultButton onClick={() => navigate("/cadastrar")} $primary>
          Criar Conta
        </DefaultButton>
      </RightSection>
    </Nav>
  )
}

export default Navbar
