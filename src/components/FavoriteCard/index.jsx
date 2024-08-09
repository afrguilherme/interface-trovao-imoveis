import { formatCurrency } from "../../utils/currency"
import { formatDate, formatTime } from "../../utils/dateTime"
import { StyleFavoriteCard, DeleteIcon } from "./styles"

import { useFavorites } from "../../hooks/FavoritesContext"

const FavoriteCard = ({ property }) => {
  const { removeFavorite } = useFavorites()

  const deleteFavorite = (propertyId) => {
    removeFavorite(propertyId)
  }

  return (
    <StyleFavoriteCard key={property.id}>
      <div className="left-section">
        <img alt="imagem-imóvel" src={property.url[0]} />
        <div className="property-info">
          <div>
            <p style={{ marginBottom: "10px" }}>{property.name}</p>
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
    </StyleFavoriteCard>
  )
}

export default FavoriteCard
