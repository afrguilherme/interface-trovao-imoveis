import { useEffect, useState, useRef } from "react"
import { useUser } from "../../hooks/UserContext.jsx"
import { useNavigate, useLocation } from "react-router-dom"
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
  UserWrap,
  Logout,
} from "./styles"

import LogoImage from "../../assets/logo.png"

import LogoutModal from "../LogoutModal"
import DefaultButton from "../DefaultButton"
import UserMenu from "../UserMenu"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false)
  const userWrapRef = useRef(null)

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

  const toggleUserMenu = () => {
    setIsUserMenuVisible((prev) => !prev)
  }

  const handleClickOutside = (event) => {
    if (
      isUserMenuVisible &&
      userWrapRef.current &&
      !userWrapRef.current.contains(event.target)
    ) {
      setIsUserMenuVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
        <NavLink href="/" active={location.pathname === "/"}>
          Início
        </NavLink>
        <NavLink href="/imoveis" active={location.pathname === "/imoveis"}>
          Imóveis
        </NavLink>
        <NavLink href="/contato" active={location.pathname === "/contato"}>
          Contato
        </NavLink>
        <NavLink href="/sobre" active={location.pathname === "/sobre"}>
          Sobre
        </NavLink>
      </Links>

      {isUserLoggedIn ? (
        <UserRightSection>
          <Favorites>
            <FavoritesIcon
              onClick={() => navigate("/favoritos")}
              active={location.pathname === "/favoritos"}
            />
          </Favorites>
          <UserInfo>
            <UserWrap ref={userWrapRef} onClick={toggleUserMenu}>
              <UserIcon className="userStyles" />
              <p className="userStyles">{userData.name}</p>
            </UserWrap>
            {isUserMenuVisible && <UserMenu />}
          </UserInfo>
          <Logout onClick={showLogoutModal}>Sair</Logout>
        </UserRightSection>
      ) : (
        <RightSection>
          <Favorites>
            <FavoritesIcon
              onClick={() => navigate("/login")}
              active={location.pathname === "/favoritos"}
            />
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
