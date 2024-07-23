import { useEffect, useState } from "react"
import { useUser } from "../../hooks/UserContext.jsx"
import { useNavigate } from "react-router-dom"

import {
  Nav,
  Logo,
  SearchBar,
  SearchInput,
  SearchIcon,
  Links,
  NavLink,
  RightSection,
  UserRightSection,
  Favorites,
  FavoritesIcon,
  UserInfo,
  UserIcon,
  Logout,
} from "./styles"

import toast, { Toaster } from "react-hot-toast"

import LogoImage from "../../assets/logo.png"

import DefaultButton from "../DefaultButton"

const Navbar = () => {
  const navigate = useNavigate()

  const { putUserData, userData } = useUser()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    setIsUserLoggedIn(userData && Object.keys(userData).length > 0)
  }, [userData])

  const logout = () => {
    try {
      localStorage.removeItem("trovaoimoveis:userData")
      putUserData({})

      setTimeout(() => {
        navigate("/login")
      }, 1500)

      toast.success("Você saiu da sua conta com sucesso")
    } catch (err) {
      toast.error("Falha no sistema")
    }
  }

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

      {isUserLoggedIn ? (
        <UserRightSection>
          <Favorites>
            <FavoritesIcon />
          </Favorites>
          <UserInfo>
            <UserIcon />
            <p>{userData.name}</p>
          </UserInfo>
          <Logout onClick={logout}>Sair</Logout>
        </UserRightSection>
      ) : (
        <RightSection>
          <Favorites>
            <FavoritesIcon />
          </Favorites>
          <DefaultButton onClick={() => navigate("/login")}>
            Entrar
          </DefaultButton>
          <DefaultButton onClick={() => navigate("/cadastrar")} $primary>
            Criar Conta
          </DefaultButton>
        </RightSection>
      )}
    </Nav>
  )
}

export default Navbar
