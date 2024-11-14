import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import api from "../../services/api"

import { formatDate, formatTime } from "../../utils/dateTime"
import { formatCurrency } from "../../utils/formatUtils"

import DefaultButton from "../../components/DefaultButton"

import {
  Container,
  LeftSection,
  Title,
  PublishInfo,
  CarouselSection,
  CarouselStyles,
  Price,
  Description,
  RightSection,
} from "./styles"

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
      <LeftSection>
        <Title>{property ? `${property.name}` : ""}</Title>
        <PublishInfo>
          {property
            ? `Publicado em ${formatDate(property.createdAt)} às ${formatTime(
                property.createdAt
              )} - id. ${property.id}`
            : ""}
        </PublishInfo>
        <CarouselSection>
          {property && (
            <>
              <CarouselStyles pagination={false} itemsToShow={1}>
                {property && property.url.map((img) => <img src={img} />)}
              </CarouselStyles>
            </>
          )}
        </CarouselSection>
        <Price>{property ? `${formatCurrency(property.price)}` : ""}</Price>
        <Description>{property ? `${property.description}` : ""}</Description>
      </LeftSection>
      <RightSection></RightSection>
    </Container>
  )
}
export default PropertyDetails
