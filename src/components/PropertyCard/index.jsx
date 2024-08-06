import { useFavorites } from "../../hooks/FavoritesContext"
import { useNavigate } from "react-router-dom"

import { useUser } from "../../hooks/UserContext"

import {
  Property,
  NeighborhoodButton,
  FavoriteStyles,
  BottomDetails,
} from "./styles"

import PropertyDetails from "../PropertyDetails"

import { formatCurrency } from "../../utils/currency"

const PropertyCard = ({ property }) => {
  const { putFavorites, favoritesProperties, isEmptyObject } = useFavorites()
  const { userData } = useUser()
  const navigate = useNavigate()

  const isFavorite = favoritesProperties.some((fav) => fav.id === property.id)

  const handleFavoriteClick = () => {
    if (!userData || isEmptyObject(userData)) {
      navigate("/login")
    } else {
      putFavorites(property)
    }
  }

  return (
    <Property className="property-div">
      <img src={property.url[0]} alt="ícone do imóvel" />
      <NeighborhoodButton>{property.neighborhood}</NeighborhoodButton>
      <PropertyDetails
        dimensions={property.dimensions}
        bathrooms={property.bathrooms}
        parkingSpace={property.parking_space}
        rooms={property.rooms}
      />
      <BottomDetails>
        <p>{formatCurrency(property.price)}</p>
        <FavoriteStyles onClick={handleFavoriteClick} isFavorite={isFavorite} />
      </BottomDetails>
    </Property>
  )
}

export default PropertyCard
