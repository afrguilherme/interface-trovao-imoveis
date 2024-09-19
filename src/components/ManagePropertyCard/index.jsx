import { useEffect, useState } from "react"
import api from "../../services/api"

import toast from "react-hot-toast"

import {
  Container,
  PropertyContainer,
  InfoWrap,
  InteractionWrap,
  EditIcon,
  DeleteIcon,
  TableHeader,
} from "./styles"

const ManagePropertyCard = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const getProperties = async () => {
      try {
        const { data } = await api.get("/properties")
        setProperties(data)
      } catch (error) {
        toast.error("Falha ao carregar as informações dos imóveis")
      }
    }
    getProperties()
  }, [])

  return (
    <Container>
      <TableHeader>
        <div></div> {/* Espaço vazio acima da imagem */}
        <p>Id</p>
        <p>Nome</p>
        <p>Interação</p>
      </TableHeader>
      {properties &&
        properties.map((property) => (
          <PropertyContainer key={property.id}>
            <InfoWrap>
              <img src={property.url[0]} alt="property-icon" />
              <p>{property.id}</p>
              <p>{property.name}</p>
            </InfoWrap>
            <InteractionWrap>
              <EditIcon />
              <DeleteIcon />
            </InteractionWrap>
          </PropertyContainer>
        ))}
    </Container>
  )
}

export default ManagePropertyCard
