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

import LogoImage from "../../assets/logo.png"

import LogoutModal from "../LogoutModal"
import DefaultButton from "../DefaultButton"

const Navbar = () => {
  const navigate = useNavigate()
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)

  const { putUserData, userData } = useUser()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const showLogoutModal = () => {
    setIsLogoutModalVisible(true)
    document.body.style.overflow = "hidden"
  }

  const hideLogoutModal = () => {
    setIsLogoutModalVisible(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    setIsUserLoggedIn(userData && Object.keys(userData).length > 0)
  }, [userData])

  return (
    <Nav>
      <LogoutModal isVisible={isLogoutModalVisible} onClose={hideLogoutModal} />
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
          <Logout onClick={showLogoutModal}>Sair</Logout>
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
