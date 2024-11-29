import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/UserContext"

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
  const { userData } = useUser()

  console.log(userData)

  const navigate = useNavigate()

  useEffect(() => {
    const getProperties = async () => {
      try {
        const { data } = await api.get("/properties")
        // Filtrar propriedades com base no papel do usuário
        const filteredProperties = userData.admin
          ? data // Admin tem acesso a todos os imóveis
          : data.filter((property) => property.user.email === userData.email) // Operator tem acesso apenas aos seus próprios imóveis

        setProperties(filteredProperties)
      } catch (error) {
        toast.error("Falha ao carregar as informações dos imóveis")
      }
    }
    getProperties()
  }, [userData])

  const propertyNavigate = (id) => {
    navigate(`/imoveis/${id}`)
  }

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

  const handleEdit = (property) => {
    navigate(`/admin/editar-imovel/${property.id}`, { state: { property } })
  }

  return (
    <Container>
      <TableHeader>
        <div></div> {/* Espaço vazio acima da imagem */}
        <p>Id</p>
        <p>Nome do Imóvel</p>
        <p>Email</p>
        <p>Nome do Usuário</p>
        <p>Interação</p>
      </TableHeader>

      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <PropertyContainer key={property.id}>
            <InfoWrap onClick={() => propertyNavigate(property.id)}>
              <img src={property.url[0]} alt="property-icon" />
              <p>{property.id}</p>
              <p>{property.name}</p>
              <p>{property.user.email}</p>
              <p>{property.user.name}</p>
            </InfoWrap>
            <InteractionWrap>
              <EditIcon onClick={() => handleEdit(property)} />
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
