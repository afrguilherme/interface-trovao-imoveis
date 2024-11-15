import { useEffect } from "react"

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

import { formatCurrency } from "../../utils/formatUtils"

const OfferCard = ({ property }) => {
  const {
    putFavorites,
    favoritesProperties,
    isEmptyObject,
    setFavoritesProperties,
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

  const propertyNavigate = (id) => {
    navigate(`/imoveis/${id}`)
  }

  return (
    <Property className="property-div">
      <div className="top-wrap" onClick={() => propertyNavigate(property.id)}>
        <img src={property.url[0]} alt="ícone do imóvel" />
        <NeighborhoodButton>{property.neighborhood}</NeighborhoodButton>
        <PropertyDetails
          dimensions={`${property.dimensions}m²`}
          bathrooms={property.bathrooms}
          parkingSpace={property.parking_space}
          rooms={property.rooms}
        />
      </div>
      <BottomDetails>
        <p>{formatCurrency(property.price)}</p>
        <FavoriteStyles onClick={handleFavoriteClick} isFavorite={isFavorite} />
      </BottomDetails>
    </Property>
  )
}

export default OfferCard
