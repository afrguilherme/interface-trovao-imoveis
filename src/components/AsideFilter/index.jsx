import {
  Container,
  FilterContainer,
  TypeSection,
  Title,
  ContainerDetails,
  CountSection,
  CountButton,
  DetailsSection,
  ValueSection,
  ValuesWrap,
  ValueDetail,
} from "./styles"

import { formatInputCurrency } from "../../utils/currency"

const AsideFilter = () => {
  const handleInputChange = (event) => {
    event.target.value = formatInputCurrency(event.target.value)
  }

  return (
    <Container>
      <FilterContainer>
        <TypeSection>
          <Title>Tipo de imóvel</Title>
          <select></select>
        </TypeSection>
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
                onChange={handleInputChange}
              />
            </ValueDetail>
            <ValueDetail>
              <Title>Máximo</Title>
              <input
                placeholder="R$ 0,00"
                type="text"
                onChange={handleInputChange}
              />
            </ValueDetail>
          </ValuesWrap>
        </ValueSection>
      </FilterContainer>
    </Container>
  )
}

export default AsideFilter
