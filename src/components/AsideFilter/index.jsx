import {
  Container,
  FilterContainer,
  TypeContainer,
  Title,
  ContainerDetails,
  CountSection,
  CountButton,
  DetailsSection,
} from "./styles"

const AsideFilter = () => {
  return (
    <Container>
      <FilterContainer>
        <TypeContainer>
          <Title>Tipo de imóvel</Title>
          <select></select>
        </TypeContainer>
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
      </FilterContainer>
    </Container>
  )
}

export default AsideFilter
