import { useState, useEffect } from "react"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"
import { selectData } from "../../utils/selectOptionsData"

import {
  Container,
  InputLabel,
  RegisterWrap,
  InputWrap,
  CheckboxWrap,
  Input,
  TextArea,
  Select,
  Errors,
} from "./styles"

import DefaultButton from "../DefaultButton"

const PropertyRegister = () => {
  const [categories, setCategories] = useState([])
  const [newProperty, setNewProperty] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])

  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required("O nome do imóvel é obrigatório"),
    price: Yup.number()
      .required("O preço do imóvel é obrigatório")
      .positive("O preço deve ser um valor positivo")
      .typeError("O preço deve ser um valor numérico"),
    address: Yup.string().required("O endereço é obrigatório"),
    neighborhood: Yup.string().required("O bairro é obrigatório"),
    town_house: Yup.string(),
    status: Yup.string().required("O status do imóvel é obrigatório"),
    dimensions: Yup.string().required("A área do imóvel é obrigatória"),
    rooms: Yup.number()
      .required("O número de quartos é obrigatório")
      .min(1, "Deve ter ao menos 1 quarto")
      .typeError("O número de quartos deve ser um valor numérico"),
    parking_space: Yup.number()
      .required("O número de vagas é obrigatório")
      .typeError("O número de vagas deve ser um valor numérico"),
    bathrooms: Yup.number()
      .required("O número de banheiros é obrigatório")
      .min(1, "Deve ter ao menos 1 banheiro")
      .typeError("O número de banheiros deve ser um valor numérico"),
    description: Yup.string().max(
      500,
      "A descrição deve ter no máximo 500 caracteres"
    ),
    contact: Yup.string().required("O contato é obrigatório"),
    offer: Yup.boolean(),
  })

  useEffect(() => {
    const loadFilterData = async () => {
      const { categories } = await selectData()
      setCategories(categories)
    }

    loadFilterData()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const formData = new FormData()

      formData.append("name", data.name)
      formData.append("price", data.price)
      formData.append("category_id", data.category ? data.category : 4)
      formData.append("address", data.address)
      formData.append("neighborhood", data.neighborhood)
      formData.append("town_house", data.town_house)
      formData.append("status", data.status)
      formData.append("dimensions", data.dimensions)
      formData.append("rooms", data.rooms)
      formData.append("parking_space", data.parking_space)
      formData.append("bathrooms", data.bathrooms)
      formData.append("description", data.description || "")
      formData.append("contact", data.contact)
      formData.append("offer", data.offer ? "true" : "false")

      Array.from(selectedFiles).forEach((file) => {
        formData.append("files", file)
      })

      const response = await api.post("/properties", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      if (response.status === 201) {
        toast.success("Imóvel cadastrado com sucesso!")
        navigate("/admin/gerenciar-imoveis")
      }
    } catch (err) {
      toast.error("Erro ao cadastrar o imóvel. Tente novamente.")
    }
  }

  const handleFileChange = (event) => {
    const files = event.target.files
    setSelectedFiles(files)
  }

  return (
    <Container>
      <h1>Cadastrar Novo Imóvel</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <InputLabel>Nome do Imóvel *</InputLabel>
          <Input {...register("name")} placeholder="Ex: Apartamento Village" />
          {errors.name && <Errors>{errors.name.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Preço *</InputLabel>
          <Input {...register("price")} placeholder="R$ 0,00" type="number" />
          {errors.price && <Errors>{errors.price.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Endereço *</InputLabel>
          <Input
            {...register("address")}
            placeholder="Ex: Rua da Saudade, 45, Bl 1, Ap 301"
          />
          {errors.address && <Errors>{errors.address.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Bairro *</InputLabel>
          <Input
            {...register("neighborhood")}
            placeholder="Digite o nome do bairro..."
          />
          {errors.neighborhood && (
            <Errors>{errors.neighborhood.message}</Errors>
          )}
        </InputWrap>

        <InputWrap>
          <InputLabel>Nome do Condomínio *</InputLabel>
          <Input
            {...register("town_house")}
            placeholder="Digite o nome do condomínio..."
          />
          {errors.town_house && <Errors>{errors.town_house.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Status *</InputLabel>
          <Select {...register("status")}>
            <option value="Pronto">Pronto</option>
            <option value="Em construção">Em construção</option>
          </Select>
          {errors.status && <Errors>{errors.status.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Tipo do imóvel *</InputLabel>
          <Select defaultValue={4} {...register("category")}>
            {categories &&
              categories.slice(1).map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </Select>
          {errors.category && <Errors>{errors.category.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Dimensões *</InputLabel>
          <Input
            {...register("dimensions")}
            placeholder="Digite as dimensões..."
          />
          {errors.dimensions && <Errors>{errors.dimensions.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Quartos *</InputLabel>
          <Input
            {...register("rooms")}
            placeholder="Número de quartos..."
            type="number"
          />
          {errors.rooms && <Errors>{errors.rooms.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Vagas de Estacionamento *</InputLabel>
          <Input
            {...register("parking_space")}
            placeholder="Número de vagas..."
            type="number"
          />
          {errors.parking_space && (
            <Errors>{errors.parking_space.message}</Errors>
          )}
        </InputWrap>

        <InputWrap>
          <InputLabel>Banheiros *</InputLabel>
          <Input
            {...register("bathrooms")}
            placeholder="Número de banheiros..."
            type="number"
          />
          {errors.bathrooms && <Errors>{errors.bathrooms.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Descrição</InputLabel>
          <TextArea
            {...register("description")}
            placeholder="Ex: O apartamento Village 1, localizado no bairro de Caminhos..."
          />
          {errors.description && <Errors>{errors.description.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Contato *</InputLabel>

          <Input
            {...register("contact")}
            placeholder="Digite o seu número de contato..."
          />

          {errors.contact && <Errors>{errors.contact.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Selecionar Imagens</InputLabel>

          <Input
            style={{ border: "none", padding: "5px" }}
            type="file"
            multiple
            onChange={handleFileChange}
          ></Input>

          {errors.files && <Errors>{errors.files.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <CheckboxWrap>
            <InputLabel>Em Oferta</InputLabel>
            <input
              style={{ marginLeft: "15px", scale: "1.3" }}
              {...register("offer")}
              type="checkbox"
            />
          </CheckboxWrap>
        </InputWrap>

        <RegisterWrap>
          <DefaultButton type="submit">Cadastrar</DefaultButton>
        </RegisterWrap>
      </form>
    </Container>
  )
}

export default PropertyRegister
