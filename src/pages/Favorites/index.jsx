import { useState } from "react"

import {
  Container,
  Title,
  Main,
  FavoritesContainer,
  FavoritesHeader,
  FavoriteCount,
  Select,
} from "./styles"

function Favorites() {
  const [sortOption, setSortOption] = useState("Mais recentes")

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
        </FavoritesContainer>
      </Main>
    </Container>
  )
}

export default Favorites
