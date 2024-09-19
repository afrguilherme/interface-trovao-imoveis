import { Container, PropertiesContainer } from "./styles"

import ManagePropertyCard from "../ManagePropertyCard"

const ManageProperties = () => {
  return (
    <Container>
      <h1>Gerenciar Imóveis</h1>
      <PropertiesContainer>
        <ManagePropertyCard />
      </PropertiesContainer>
    </Container>
  )
}

export default ManageProperties
