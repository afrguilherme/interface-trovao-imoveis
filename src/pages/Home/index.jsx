import { useEffect, useState } from "react"
import api from "../../services/api"
import Carousel from "react-elastic-carousel"

import { Container, CarouselStyles, NeighborhoodButton } from "./styles"

function Home() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    async function getProperties() {
      const { data } = await api.get("/properties")
      setProperties(data)
    }
    getProperties()
  }, [])

  return (
    <Container>
      <h1>Imóveis em Destaque</h1>
      <CarouselStyles itemsToShow={4}>
        {properties &&
          properties
            .filter((property) => property.offer === true)
            .map((property) => (
              <div className="property-div" key={property.id}>
                <img src={property.url[0]} alt="ícone do imóvel" />
                <NeighborhoodButton>{property.name}</NeighborhoodButton>
              </div>
            ))}
      </CarouselStyles>
    </Container>
  )
}

export default Home
