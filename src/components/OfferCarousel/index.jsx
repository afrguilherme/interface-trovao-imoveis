import api from "../../services/api"
import { useEffect, useState } from "react"

import {
  CarouselStyles,
  // Property,
  // NeighborhoodButton,
  // FavoriteStyles,
  //BottomDetails,
} from "./styles"

// import PropertyDetails from "../PropertyDetails"

// import { formatCurrency } from "../../utils/currency"

import PropertyCard from "../PropertyCard"

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
            <PropertyCard key={property.id} property={property} />
          ))}
    </CarouselStyles>
  )
}

export default OfferCarousel
