import {
  Container,
  FilterContainer,
  SelectSection,
  Title,
  ContainerDetails,
  CountSection,
  CountButton,
  DetailsSection,
  ValueSection,
  ValuesWrap,
  ValueDetail,
  CheckboxSection,
} from "./styles"

import { formatInputCurrency } from "../../utils/formatUtils"

const AsideFilter = () => {
  const handleInputValue = (event) => {
    event.target.value = formatInputCurrency(event.target.value)
  }

  return (
    <Container>
      <FilterContainer>
        <SelectSection>
          <Title>Tipo de imóvel</Title>
          <select></select>
        </SelectSection>

        <ContainerDetails>
          <DetailsSection>
            <Title>Quartos</Title>
            <CountSection>
              <CountButton>1</CountButton>
              <CountButton>2</CountButton>
              <CountButton>3</CountButton>
              <CountButton>4 +</CountButton>
            </CountSection>
          </DetailsSection>

          <DetailsSection>
            <Title>Banheiros</Title>
            <CountSection>
              <CountButton>1</CountButton>
              <CountButton>2</CountButton>
              <CountButton>3</CountButton>
              <CountButton>4 +</CountButton>
            </CountSection>
          </DetailsSection>

          <DetailsSection>
            <Title>Vagas</Title>
            <CountSection>
              <CountButton>1</CountButton>
              <CountButton>2</CountButton>
              <CountButton>3</CountButton>
              <CountButton>4 +</CountButton>
            </CountSection>
          </DetailsSection>
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

        <SelectSection>
          <Title>Status do imóvel</Title>
          <select></select>
        </SelectSection>

        <SelectSection style={{ border: "none", marginTop: "20px" }}>
          <Title>Bairro</Title>
          <select></select>
        </SelectSection>

        <SelectSection style={{ border: "none" }}>
          <Title>Condomínio</Title>
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
