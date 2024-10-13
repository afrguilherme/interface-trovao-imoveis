import { useEffect, useState } from "react"
import api from "../../services/api"

import toast from "react-hot-toast"

import {
  Container,
  PropertyContainer,
  EmptyContainer,
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

  const DeleteProperty = async (id) => {
    try {
      await api.delete(`properties/${id}`)
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== id)
      )

      toast.success("Imóvel deletado com sucesso!")
    } catch (error) {
      toast.error("Erro ao deletar o imóvel, tente novamente mais tarde")
    }
  }

  return (
    <Container>
      <TableHeader>
        <div></div> {/* Espaço vazio acima da imagem */}
        <p>Id</p>
        <p>Nome</p>
        <p>Interação</p>
      </TableHeader>

      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <PropertyContainer key={property.id}>
            <InfoWrap>
              <img src={property.url[0]} alt="property-icon" />
              <p>{property.id}</p>
              <p>{property.name}</p>
            </InfoWrap>
            <InteractionWrap>
              <EditIcon />
              <DeleteIcon onClick={() => DeleteProperty(property.id)} />
            </InteractionWrap>
          </PropertyContainer>
        ))
      ) : (
        <EmptyContainer>
          <h3>Nenhum imóvel encontrado :(</h3>
        </EmptyContainer>
      )}
    </Container>
  )
}

export default ManagePropertyCard
