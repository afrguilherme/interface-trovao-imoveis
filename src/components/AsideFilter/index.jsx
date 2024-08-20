import { useState, useEffect } from "react"

import api from "../../services/api"

import {
  Container,
  FilterContainer,
  Title,
  ContainerDetails,
  ValueSection,
  ValuesWrap,
  ValueDetail,
  CheckboxSection,
} from "./styles"

import SelectSection from "../SelectSection"
import CountSection from "../CountSection"

import { formatInputCurrency } from "../../utils/formatUtils"

const AsideFilter = () => {
  const [categories, setCategories] = useState([])
  const [neighborhoods, setNeighborhoods] = useState([])
  const [propertyStatus, setPropertyStatus] = useState([])
  const [townHouses, setTownHouses] = useState([])

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get("/categories")
      setCategories([{ id: "all", name: "Todos" }, ...data])
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getNeighborhood = async () => {
      const { data } = await api.get("/properties")

      const uniqueNeighborhood = Array.from(
        new Set(data.map((property) => property.neighborhood))
      )

      setNeighborhoods(["Todos", ...uniqueNeighborhood])
    }
    getNeighborhood()
  }, [])

  useEffect(() => {
    const getStatus = async () => {
      const { data } = await api.get("/properties")

      const uniqueStatus = Array.from(
        new Set(data.map((property) => property.status))
      )

      setPropertyStatus(["Todos", ...uniqueStatus])
    }
    getStatus()
  }, [])

  useEffect(() => {
    const getTownHouse = async () => {
      const { data } = await api.get("/properties")

      const uniqueTownHouse = Array.from(
        new Set(data.map((property) => property.town_house))
      )

      setTownHouses(["Todos", ...uniqueTownHouse])
    }
    getTownHouse()
    console.log(townHouses)
  }, [])

  const handleInputValue = (event) => {
    event.target.value = formatInputCurrency(event.target.value)
  }

  return (
    <Container>
      <FilterContainer>
        <SelectSection title="Tipo de imóvel">
          <select>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </SelectSection>

        <ContainerDetails>
          <CountSection title="Quartos" />
          <CountSection title="Banheiros" />
          <CountSection title="Vagas" />
        </ContainerDetails>

        <ValueSection>
          <Title>Valor</Title>
          <ValuesWrap>
            <ValueDetail>
              <Title>Mínimo</Title>
              <input
                placeholder="R$ 0,00"
                type="text"
                onChange={handleInputValue}
              />
            </ValueDetail>
            <ValueDetail>
              <Title>Máximo</Title>
              <input
                placeholder="R$ 0,00"
                type="text"
                onChange={handleInputValue}
              />
            </ValueDetail>
          </ValuesWrap>
        </ValueSection>

        <ValueSection style={{ border: "none" }}>
          <Title>Área do imóvel</Title>
          <ValuesWrap>
            <ValueDetail>
              <Title>Mínimo</Title>
              <input placeholder="0 m²" type="number"></input>
            </ValueDetail>
            <ValueDetail>
              <Title>Máximo</Title>
              <input placeholder="0 m²" type="number"></input>
            </ValueDetail>
          </ValuesWrap>
        </ValueSection>

        <SelectSection title={"Status do imóvel"}>
          <select>
            {propertyStatus.map((status) => (
              <option key={status.index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </SelectSection>

        <SelectSection
          title={"Bairro"}
          style={{ border: "none", marginTop: "20px" }}
        >
          <select>
            {neighborhoods.map((neighborhood) => (
              <option key={neighborhood.index} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
        </SelectSection>

        <SelectSection title={"Condomínio"} style={{ border: "none" }}>
          <select>
            {townHouses.map((townHouse) => (
              <option key={townHouse.index} value={townHouse}>
                {townHouse}
              </option>
            ))}
          </select>
        </SelectSection>

        <CheckboxSection>
          <input type="checkbox" />
          <Title>Imóveis em oferta</Title>
        </CheckboxSection>
      </FilterContainer>
    </Container>
  )
}

export default AsideFilter
