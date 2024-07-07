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
        <Button>Entrar</Button>
        <Button $primary>Criar Conta</Button>
      </RightSection>
    </Nav>
  )
}

export default Navbar
