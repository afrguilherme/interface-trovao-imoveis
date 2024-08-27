import api from "../../services/api"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { Container, PropertiesContainer } from "./styles"

import AsideFilter from "../../components/AsideFilter"

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
        property.status.toLowerCase().includes(query.toLowerCase()) ||
        property.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProperties(filtered)
  }, [properties, searchParams])

  const handleFilter = (filters) => {
    const filtered = properties.filter((property) => {
      const matchesCategory =
        filters.category && filters.category !== "Todos"
          ? property.category.id == filters.category
          : true
      const matchesBedrooms = filters.bedrooms
        ? property.rooms >= parseInt(filters.bedrooms)
        : true
      const matchesBathrooms = filters.bathrooms
        ? property.bathrooms >= parseInt(filters.bathrooms)
        : true
      const matchesParking = filters.parking
        ? property.parking_space >= parseInt(filters.parking)
        : true
      const matchesMinPrice = filters.minPrice
        ? property.price >=
          parseInt(
            filters.minPrice
              .replace("R$", "")
              .replace(/\./g, "")
              .replace(",", ".")
              .trim()
          )
        : true
      const matchesMaxPrice =
        filters.maxPrice &&
        (!filters.minPrice ||
          parseInt(
            filters.maxPrice
              .replace("R$", "")
              .replace(/\./g, "")
              .replace(",", ".")
              .trim()
          ) >=
            parseInt(
              filters.minPrice
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
            ))
          ? property.price <=
            parseInt(
              filters.maxPrice
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
            )
          : true
      const matchesMinArea = filters.minArea
        ? parseInt(property.dimensions.replace("m²", "").trim()) >=
          parseInt(filters.minArea)
        : true
      const matchesMaxArea = filters.maxArea
        ? parseInt(property.dimensions.replace("m²", "").trim()) <=
          parseInt(filters.maxArea)
        : true
      const matchesStatus =
        filters.status && filters.status !== "Todos"
          ? property.status === filters.status
          : true
      const matchesNeighborhood =
        filters.neighborhood && filters.neighborhood !== "Todos"
          ? property.neighborhood === filters.neighborhood
          : true
      const matchesTownHouse =
        filters.townHouse && filters.townHouse !== "Todos"
          ? property.town_house === filters.townHouse
          : true
      const matchesIsOffer = filters.isOffer
        ? property.offer === filters.isOffer
        : true

      return (
        matchesCategory &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesParking &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinArea &&
        matchesMaxArea &&
        matchesStatus &&
        matchesNeighborhood &&
        matchesTownHouse &&
        matchesIsOffer
      )
    })

    setFilteredProperties(filtered)
  }

  return (
    <>
      <Container>
        <AsideFilter onFilter={handleFilter} />
        <PropertiesContainer>
          {filteredProperties &&
            filteredProperties.map((property) => (
              <PropertyCard
                style={{ maxHeight: "450px" }}
                key={property.id}
                property={property}
              />
            ))}
        </PropertiesContainer>
      </Container>
    </>
  )
}

export default Properties
