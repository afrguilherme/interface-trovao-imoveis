import React from "react"
import {
  Property,
  NeighborhoodButton,
  FavoriteStyles,
  BottomDetails,
} from "./styles"
import PropertyDetails from "../PropertyDetails"
import { formatCurrency } from "../../utils/currency"

const PropertyCard = ({ property }) => {
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
        <FavoriteStyles />
      </BottomDetails>
    </Property>
  )
}

export default PropertyCard
