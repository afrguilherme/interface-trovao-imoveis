import { useState, useEffect } from "react"

import api from "../../services/api"

import {
  Container,
  FilterContainer,
  FilterWrap,
  Title,
  ContainerDetails,
  ValueSection,
  ValuesWrap,
  ValueDetail,
  CheckboxSection,
  ButtonsSection,
} from "./styles"

import SelectSection from "../SelectSection"
import CountSection from "../CountSection"
import DefaultButton from "../DefaultButton"

import { formatInputCurrency } from "../../utils/formatUtils"
import { selectData } from "../../utils/selectOptionsData"

const AsideFilter = ({ onFilter }) => {
  const [categories, setCategories] = useState([])
  const [neighborhoods, setNeighborhoods] = useState([])
  const [propertyStatus, setPropertyStatus] = useState([])
  const [townHouses, setTownHouses] = useState([])

  // Estados de filtro abaixo
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBedrooms, setSelectedBedrooms] = useState("")
  const [selectedBathrooms, setSelectedBathrooms] = useState("")
  const [selectedParking, setSelectedParking] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [minArea, setMinArea] = useState("")
  const [maxArea, setMaxArea] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("")
  const [selectedTownHouse, setSelectedTownHouse] = useState("")
  const [isOffer, setIsOffer] = useState(false)

  useEffect(() => {
    const loadFilterData = async () => {
      const { categories, neighborhoods, propertyStatus, townHouses } =
        await selectData()

      setCategories(categories)
      setNeighborhoods(neighborhoods)
      setPropertyStatus(propertyStatus)
      setTownHouses(townHouses)
    }

    loadFilterData()
  }, [])

  const handleInputValue = (value) => {
    return formatInputCurrency(value)
  }

  const handleFilter = () => {
    const filters = {
      category: selectedCategory,
      bedrooms: selectedBedrooms,
      bathrooms: selectedBathrooms,
      parking: selectedParking,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      status: selectedStatus,
      neighborhood: selectedNeighborhood,
      townHouse: selectedTownHouse,
      isOffer,
    }
    onFilter(filters)
    console.log(filters)
  }

  return (
    <Container>
      <FilterContainer>
        <FilterWrap>
          <SelectSection title="Tipo de imóvel">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </SelectSection>
          <ContainerDetails>
            <CountSection
              title="Quartos"
              selectedValue={selectedBedrooms}
              onSelect={setSelectedBedrooms}
            />
            <CountSection
              title="Banheiros"
              selectedValue={selectedBathrooms}
              onSelect={setSelectedBathrooms}
            />
            <CountSection
              title="Vagas"
              selectedValue={selectedParking}
              onSelect={setSelectedParking}
            />
          </ContainerDetails>
          <ValueSection>
            <Title>Valor</Title>
            <ValuesWrap>
              <ValueDetail>
                <Title>Mínimo</Title>
                <input
                  placeholder="R$ 0,00"
                  type="text"
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(handleInputValue(e.target.value))
                  }
                />
              </ValueDetail>
              <ValueDetail>
                <Title>Máximo</Title>
                <input
                  placeholder="R$ 0,00"
                  type="text"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(handleInputValue(e.target.value))
                  }
                />
              </ValueDetail>
            </ValuesWrap>
          </ValueSection>
          <ValueSection style={{ border: "none" }}>
            <Title>Área do imóvel</Title>
            <ValuesWrap>
              <ValueDetail>
                <Title>Mínimo</Title>
                <input
                  placeholder="0 m²"
                  type="number"
                  value={minArea}
                  onChange={(e) => setMinArea(e.target.value)}
                />
              </ValueDetail>
              <ValueDetail>
                <Title>Máximo</Title>
                <input
                  placeholder="0 m²"
                  type="number"
                  value={maxArea}
                  onChange={(e) => setMaxArea(e.target.value)}
                ></input>
              </ValueDetail>
            </ValuesWrap>
          </ValueSection>
          <SelectSection title={"Status do imóvel"}>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
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
            <select
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
            >
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood.index} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </SelectSection>
          <SelectSection title={"Condomínio"} style={{ border: "none" }}>
            <select
              value={selectedTownHouse}
              onChange={(e) => setSelectedTownHouse(e.target.value)}
            >
              {townHouses.map((townHouse) => (
                <option key={townHouse.index} value={townHouse}>
                  {townHouse}
                </option>
              ))}
            </select>
          </SelectSection>
          <CheckboxSection>
            <input
              type="checkbox"
              checked={isOffer}
              onChange={(e) => setIsOffer(e.target.checked)}
            />
            <Title>Imóveis em oferta</Title>
          </CheckboxSection>
        </FilterWrap>
        <ButtonsSection>
          <DefaultButton>Limpar</DefaultButton>
          <DefaultButton $primary onClick={handleFilter}>
            Buscar Imóveis
          </DefaultButton>
        </ButtonsSection>
      </FilterContainer>
    </Container>
  )
}

export default AsideFilter
