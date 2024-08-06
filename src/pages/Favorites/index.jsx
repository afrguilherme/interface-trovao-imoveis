import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useUser } from "../../hooks/UserContext.jsx"
import { useFavorites } from "../../hooks/FavoritesContext.jsx"

import { formatCurrency } from "../../utils/currency.js"
import { formatDate, formatTime } from "../../utils/dateTime.js"

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
  FavoriteCard,
  DeleteIcon,
} from "./styles"

function Favorites() {
  const { userData } = useUser()
  const { putFavorites, favoritesProperties, removeFavorite } = useFavorites()

  const [sortOption, setSortOption] = useState("Mais recentes")
  const [sortedFavorites, setSortedFavorites] = useState([])
  const [favoriteCount, setFavoriteCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    if (!userData || !Object.keys(userData).length > 0) {
      navigate("/login")
    }
  }, [userData])

  useEffect(() => {
    setFavoriteCount(favoritesProperties.length)
    sortFavorites(sortOption)
  }, [favoritesProperties, sortOption])

  const handleSortChange = (event) => {
    setSortOption(event.target.value)
  }

  const sortFavorites = (option) => {
    let sortedArray = [...favoritesProperties]
    if (option === "Mais recente") {
      sortedArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (option === "Menor preço") {
      sortedArray.sort((a, b) => a.price - b.price)
    }
    setSortedFavorites(sortedArray)
  }

  const deleteFavorite = (propertyId) => {
    removeFavorite(propertyId)
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
              <option value="Mais recente">Mais recentes</option>
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
                  <FavoriteCard key={property.id}>
                    <div className="left-section">
                      <img alt="imagem-imóvel" src={property.url[0]} />
                      <div className="property-info">
                        <div>
                          <p style={{ marginBottom: "10px" }}>
                            {property.name}
                          </p>
                          <p style={{ color: "#000", fontSize: "18px" }}>
                            {formatCurrency(property.price)}
                          </p>
                        </div>
                        <div>
                          <p>{property.neighborhood}</p>
                          <p style={{ fontSize: "12px", marginTop: "8px" }}>
                            {formatDate(property.createdAt)} -{" "}
                            {formatTime(property.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <DeleteIcon onClick={() => deleteFavorite(property.id)} />
                  </FavoriteCard>
                ))}
            </CardsContainer>
          )}
        </FavoritesContainer>
      </Main>
    </Container>
  )
}

export default Favorites
