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

import { formatInputCurrency } from "../../utils/formatUtils"

import SelectSection from "../SelectSection"
import CountSection from "../CountSection"

const AsideFilter = () => {
  const handleInputValue = (event) => {
    event.target.value = formatInputCurrency(event.target.value)
  }

  return (
    <Container>
      <FilterContainer>
        <SelectSection title="Tipo de imóvel">
          <select></select>
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
          <select></select>
        </SelectSection>

        <SelectSection
          title={"Bairro"}
          style={{ border: "none", marginTop: "20px" }}
        >
          <select></select>
        </SelectSection>

        <SelectSection title={"Condomínio"} style={{ border: "none" }}>
          <select></select>
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
