import api from "../../services/api"
import { useEffect, useState } from "react"

import {
  CarouselStyles,
  Property,
  NeighborhoodButton,
  FavoriteStyles,
  BottomDetails,
} from "./styles"

import PropertyDetails from "../PropertyDetails"

import { formatCurrency } from "../../utils/currency"

const OfferCarousel = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    async function getProperties() {
      const { data } = await api.get("/properties")
      setProperties(data)
    }
    getProperties()
  }, [])

  return (
    <CarouselStyles itemsToShow={4}>
      {properties &&
        properties
          .filter((property) => property.offer === true)
          .map((property) => (
            <Property className="property-div" key={property.id}>
              <img src={property.url[0]} alt="ícone do imóvel" />
              <NeighborhoodButton>{property.name}</NeighborhoodButton>
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
          ))}
    </CarouselStyles>
  )
}

export default OfferCarousel
