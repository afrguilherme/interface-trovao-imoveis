import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import api from "../../services/api"

import { formatDate, formatTime } from "../../utils/dateTime"
import { formatCurrency } from "../../utils/formatUtils"

import DefaultButton from "../../components/DefaultButton"
import PropertyDetails from "../../components/PropertyDetails"

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
  Topic,
  DownDetails,
} from "./styles"

const PropertyPage = () => {
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
                {property &&
                  property.url.map((img) => (
                    <img alt="property-image" src={img} />
                  ))}
              </CarouselStyles>
            </>
          )}
        </CarouselSection>
        <Price>{property ? `${formatCurrency(property.price)}` : ""}</Price>
        <Topic>Descrição</Topic>
        <Description>
          {property?.description && property.description.trim() !== ""
            ? property.description
            : "O responsável pelo anúncio não forneceu uma descrição."}
        </Description>
      </LeftSection>
      <RightSection>
        <div className="details-wrap">
          <PropertyDetails
            dimensions={property ? `${property.dimensions}m²` : ""}
            bathrooms={property ? property.bathrooms : ""}
            parkingSpace={property ? property.parking_space : ""}
            rooms={property ? property.rooms : ""}
          />
        </div>
        <DownDetails>
          <div>
            <Topic>Endereço</Topic>
            <p className="topic-value">
              {property ? property.address : ""} -{" "}
              {property ? " " + property.neighborhood : ""}
            </p>
          </div>
          <div>
            <Topic>Condomínio</Topic>
            <p className="topic-value">
              {property?.town_house && property.town_house.trim() !== ""
                ? property.town_house
                : "N/A"}
            </p>
          </div>
          <div>
            <Topic>Status</Topic>
            <p className="topic-value">{property ? property.status : ""}</p>
          </div>
          <div>
            <Topic>Contato</Topic>
            <p className="topic-value">{property ? property.contact : ""}</p>
          </div>
        </DownDetails>
      </RightSection>
    </Container>
  )
}
export default PropertyPage
