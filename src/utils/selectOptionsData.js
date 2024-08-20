import api from "../services/api"

export const selectData = async () => {
  const categoriesRequest = api.get("/categories")
  const propertiesRequest = api.get("/properties")

  const [categoriesResponse, propertiesResponse] = await Promise.all([
    categoriesRequest,
    propertiesRequest,
  ])

  const categories = [{ id: "all", name: "Todos" }, ...categoriesResponse.data]

  const neighborhoods = Array.from(
    new Set(propertiesResponse.data.map((property) => property.neighborhood))
  )

  const propertyStatus = Array.from(
    new Set(propertiesResponse.data.map((property) => property.status))
  )

  const townHouses = Array.from(
    new Set(propertiesResponse.data.map((property) => property.town_house))
  )

  return {
    categories,
    neighborhoods: ["Todos", ...neighborhoods],
    propertyStatus: ["Todos", ...propertyStatus],
    townHouses: ["Todos", ...townHouses],
  }
}
