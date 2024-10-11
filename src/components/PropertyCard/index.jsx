import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { formatCurrency } from "../../utils/formatUtils"
import { formatDate, formatTime } from "../../utils/dateTime"
import { StylePropertyCard, DeleteIcon, FavoriteStyles } from "./styles"

import { useFavorites } from "../../hooks/FavoritesContext"
import { useUser } from "../../hooks/UserContext"

import PropertyDetails from "../PropertyDetails"

const PropertyCard = ({ property, favoriteCard }) => {
  const {
    putFavorites,
    favoritesProperties,
    isEmptyObject,
    setFavoritesProperties,
    removeFavorite,
  } = useFavorites()

  const { userData } = useUser()
  const navigate = useNavigate()

  const isFavorite =
    Array.isArray(favoritesProperties) &&
    favoritesProperties.some((fav) => fav.id === property.id)

  useEffect(() => {
    const FavoritesRefresh = () => {
      if (!userData || isEmptyObject(userData)) {
        setFavoritesProperties({})
      } else {
        const storedFavorites = JSON.parse(
          localStorage.getItem(`trovaoimoveis:favoritesInfo-${userData.id}`)
        )
        setFavoritesProperties(storedFavorites)
      }
    }
    FavoritesRefresh()
  }, [userData])

  const handleFavoriteClick = () => {
    if (!userData || isEmptyObject(userData)) {
      navigate("/login")
    } else {
      putFavorites(property)
    }
  }

  const deleteFavorite = (propertyId) => {
    removeFavorite(propertyId)
  }

  return (
    <StylePropertyCard key={property.id}>
      <div className="left-section">
        <img alt="imagem-imóvel" src={property.url[0]} />
        <div className="property-info">
          <div>
            <p style={{ marginBottom: "10px" }}>{property.name}</p>
            <p style={{ color: "#000", fontSize: "18px" }}>
              {formatCurrency(property.price)}
            </p>
            <PropertyDetails
              dimensions={`${property.dimensions}m²`}
              bathrooms={property.bathrooms}
              parkingSpace={property.parking_space}
              rooms={property.rooms}
            />
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
      {favoriteCard ? (
        <DeleteIcon onClick={() => deleteFavorite(property.id)} />
      ) : (
        <FavoriteStyles onClick={handleFavoriteClick} isFavorite={isFavorite} />
      )}
    </StylePropertyCard>
  )
}

export default PropertyCard
