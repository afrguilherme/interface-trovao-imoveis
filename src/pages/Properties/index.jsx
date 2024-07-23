import api from "../../services/api"
import { useEffect, useState } from "react"

import {
  Container,
  Aside,
  PropertiesContainer,
  FilterContainer,
} from "./styles"

import PropertyCard from "../../components/PropertyCard"

function Properties() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    async function getProperties() {
      const { data } = await api.get("/properties")
      setProperties(data)
    }
    getProperties()
  }, [])

  return (
    <>
      <Container>
        <Aside>
          <FilterContainer></FilterContainer>
        </Aside>
        <PropertiesContainer>
          {properties &&
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </PropertiesContainer>
      </Container>
    </>
  )
}

export default Properties
