import { useEffect, useState } from "react"
import { useUser } from "../../hooks/UserContext.jsx"
import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()

  const { putUserData, userData } = useUser()

  useEffect(() => {
    setIsUserLoggedIn(userData && Object.keys(userData).length > 0)
  }, [userData])

  const showLogoutModal = () => {
    setIsLogoutModalVisible(true)
    document.body.style.overflow = "hidden"
  }

  const hideLogoutModal = () => {
    setIsLogoutModalVisible(false)
    document.body.style.overflow = "auto"
  }

  const handleSearch = () => {
    setSearchParams({ q: searchQuery })
    navigate(`/imoveis?q=${searchQuery}`)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <Nav>
      <LogoutModal isVisible={isLogoutModalVisible} onClose={hideLogoutModal} />
      <Logo>
        <button onClick={() => navigate("/")}>
          <img src={LogoImage} alt="logo" />
        </button>
      </Logo>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Bairro, endereço, condomínio..."
          value={searchQuery}
          onChange={(data) => setSearchQuery(data.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon onClick={handleSearch} />
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
            <FavoritesIcon onClick={() => navigate("/favoritos")} />
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
            <FavoritesIcon onClick={() => navigate("/login")} />
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
