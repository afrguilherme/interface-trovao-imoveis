import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useUser } from "../../hooks/UserContext.jsx"
import { useFavorites } from "../../hooks/FavoritesContext.jsx"

import {
  Container,
  Title,
  Main,
  FavoritesContainer,
  FavoritesHeader,
  FavoriteCount,
  Select,
  FavoritesContent,
  CardsContainer,
} from "./styles"

import FavoriteCard from "../../components/FavoriteCard/index.jsx"

function Favorites() {
  const { userData } = useUser()
  const { favoritesProperties } = useFavorites()

  const [sortOption, setSortOption] = useState("Mais recente")
  const [sortedFavorites, setSortedFavorites] = useState([])
  const [favoriteCount, setFavoriteCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    if (!userData || !Object.keys(userData).length > 0) {
      navigate("/login")
    }
  }, [userData])

  const sortFavorites = (option) => {
    let sortedArray = [...favoritesProperties]
    if (option === "Mais recente") {
      sortedArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (option === "Menor preço") {
      sortedArray.sort((a, b) => a.price - b.price)
    }
    setSortedFavorites(sortedArray)
  }

  useEffect(() => {
    setFavoriteCount(favoritesProperties.length)
    sortFavorites(sortOption)
  }, [sortOption, favoritesProperties])

  const handleSortChange = (event) => {
    setSortOption(event.target.value)
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
              <p>({favoriteCount})</p>
            </FavoriteCount>
            <Select value={sortOption} onChange={handleSortChange}>
              <option value="Mais recente">Mais recente</option>
              <option value="Menor preço">Menor preço</option>
            </Select>
          </FavoritesHeader>
          {favoriteCount === 0 ? (
            <FavoritesContent>
              <p>Não há anúncios favoritos :(</p>
            </FavoritesContent>
          ) : (
            <CardsContainer>
              {sortedFavorites &&
                sortedFavorites.map((property) => (
                  <FavoriteCard property={property} key={property.id} />
                ))}
            </CardsContainer>
          )}
        </FavoritesContainer>
      </Main>
    </Container>
  )
}

export default Favorites
