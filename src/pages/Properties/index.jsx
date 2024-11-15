import api from "../../services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

import { Container, PropertiesContainer, EmptyContainer } from "./styles"

import AsideFilter from "../../components/AsideFilter"
import PropertyCard from "../../components/PropertyCard"

function Properties() {
  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

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
    const maxPriceValue = filters.maxPrice
      ? parseInt(
          filters.maxPrice
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
        )
      : null

    const minPriceValue = filters.minPrice
      ? parseInt(
          filters.minPrice
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
        )
      : null

    if (
      maxPriceValue !== null &&
      minPriceValue !== null &&
      maxPriceValue < minPriceValue
    ) {
      toast.error("O valor máximo não pode ser menor que o valor mínimo")
      return
    }

    const filtered = properties.filter((property) => {
      const matchesCategory =
        filters.category && filters.category !== "Todos"
          ? property.category.id == filters.category
          : true

      const matchesBedrooms = filters.bedrooms
        ? filters.bedrooms === "4+"
          ? property.rooms >= 4
          : property.rooms === parseInt(filters.bedrooms)
        : true

      const matchesBathrooms = filters.bathrooms
        ? filters.bathrooms === "4+"
          ? property.bathrooms >= 4
          : property.bathrooms === parseInt(filters.bathrooms)
        : true

      const matchesParking = filters.parking
        ? filters.parking === "4+"
          ? property.parking_space >= 4
          : property.parking_space === parseInt(filters.parking)
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

      const matchesMaxPrice = filters.maxPrice
        ? property.price <= maxPriceValue
        : true

      const matchesMinArea = filters.minArea
        ? parseInt(
            property.dimensions && typeof property.dimensions === "string"
              ? property.dimensions.replace("m²", "").trim()
              : property.dimensions
          ) >= parseInt(filters.minArea)
        : true

      const matchesMaxArea = filters.maxArea
        ? parseInt(
            property.dimensions && typeof property.dimensions === "string"
              ? property.dimensions.replace("m²", "").trim()
              : property.dimensions
          ) <= parseInt(filters.maxArea)
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
        {filteredProperties && filteredProperties.length > 0 ? (
          <PropertiesContainer>
            {filteredProperties.map((property) => (
              <PropertyCard
                style={{ maxHeight: "450px" }}
                key={property.id}
                property={property}
              />
            ))}
          </PropertiesContainer>
        ) : (
          <EmptyContainer>
            <h3>Nenhum imóvel encontrado :(</h3>
          </EmptyContainer>
        )}
      </Container>
    </>
  )
}

export default Properties
