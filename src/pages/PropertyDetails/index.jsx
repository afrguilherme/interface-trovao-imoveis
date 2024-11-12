import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Container, CarouselSection, CarouselStyles } from "./styles"
import api from "../../services/api"

const PropertyDetails = () => {
  const { id } = useParams()
  const [property, setProperty] = useState()

  useEffect(() => {
    async function getProperty() {
      const { data } = await api.get(`/properties/${id}`)
      setProperty(data)
    }
    getProperty()
  }, [id])

  return (
    <Container>
      <CarouselSection>
        {property && (
          <>
            <CarouselStyles pagination={false} itemsToShow={1}>
              {property && property.url.map((img) => <img src={img} />)}
            </CarouselStyles>
          </>
        )}
      </CarouselSection>
    </Container>
  )
}
export default PropertyDetails
