import api from "../../services/api"
import { useEffect, useState } from "react"

import { CarouselStyles } from "./styles"

import OfferCard from "../OfferCard"

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
            <OfferCard key={property.id} property={property} />
          ))}
    </CarouselStyles>
  )
}

export default OfferCarousel
