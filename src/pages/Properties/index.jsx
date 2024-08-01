import api from "../../services/api"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  Container,
  Aside,
  PropertiesContainer,
  FilterContainer,
} from "./styles"

import PropertyCard from "../../components/PropertyCard"

function Properties() {
  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    async function getProperties() {
      const { data } = await api.get("/properties")
      setProperties(data)
    }
    getProperties()
  }, [])

  useEffect(() => {
    const query = searchParams.get("q") || ""

    const filtered = properties.filter(
      (property) =>
        property.address.toLowerCase().includes(query.toLowerCase()) ||
        property.neighborhood.toLowerCase().includes(query.toLowerCase()) ||
        property.town_house.toLowerCase().includes(query.toLowerCase()) ||
        property.status.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProperties(filtered)
  }, [properties, searchParams])

  return (
    <>
      <Container>
        <Aside>
          <FilterContainer></FilterContainer>
        </Aside>
        <PropertiesContainer>
          {filteredProperties &&
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </PropertiesContainer>
      </Container>
    </>
  )
}

export default Properties
