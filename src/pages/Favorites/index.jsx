import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useUser } from "../../hooks/UserContext.jsx"

import {
  Container,
  Title,
  Main,
  FavoritesContainer,
  FavoritesHeader,
  FavoriteCount,
  Select,
  FavoritesContent,
} from "./styles"

function Favorites() {
  const { putUserData, userData } = useUser()

  const [sortOption, setSortOption] = useState("Mais recentes")

  const navigate = useNavigate()

  useEffect(() => {
    if (!userData || !Object.keys(userData).length > 0) {
      navigate("/login")
    }
  }, [userData])

  const handleSortChange = (event) => {
    setSortOption(event.target.value)
    //Adicionar restante da lógica de ordenar favoritos aqui.
  }

  return (
    <Container>
      <Main>
        <Title>
          <h1>Imóveis Favoritos</h1>
        </Title>
        <FavoritesContainer>
          <FavoritesHeader>
            <FavoriteCount>
              <h2>Anúncios Favoritos</h2>
              <p>(0)</p>
            </FavoriteCount>
            <Select value={sortOption} onChange={handleSortChange}>
              <option value="Mais recentes">Mais recentes</option>
              <option value="Menor preço">Menor preço</option>
            </Select>
          </FavoritesHeader>
          <FavoritesContent>
            <p>Não há anúncios favoritos :(</p>
          </FavoritesContent>
        </FavoritesContainer>
      </Main>
    </Container>
  )
}

export default Favorites
