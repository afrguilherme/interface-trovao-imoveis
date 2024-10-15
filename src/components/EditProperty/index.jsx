import { useState, useEffect } from "react"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import toast from "react-hot-toast"
import { useNavigate, useLocation } from "react-router-dom"

import api from "../../services/api"
import { selectData } from "../../utils/selectOptionsData"
import { formatPhoneNumber } from "../../utils/formatUtils"

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

const EditProperty = () => {
  const [categories, setCategories] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])
  const [phoneNumber, setPhoneNumber] = useState("")

  const navigate = useNavigate()
  const location = useLocation()
  const property = location.state?.property || {}

  console.log(property)

  const schema = Yup.object().shape({
    name: Yup.string(),
    price: Yup.number()

      .positive("O preço deve ser um valor positivo")
      .typeError("O preço deve ser um valor numérico"),
    address: Yup.string(),
    neighborhood: Yup.string(),
    town_house: Yup.string(),
    status: Yup.string(),
    dimensions: Yup.number().positive(
      "A área do imóvel deve ser um valor positivo"
    ),
    rooms: Yup.number()

      .min(1, "Deve ter ao menos 1 quarto")
      .typeError("O número de quartos deve ser um valor numérico"),
    parking_space: Yup.number().typeError(
      "O número de vagas deve ser um valor numérico"
    ),
    bathrooms: Yup.number()
      .min(1, "Deve ter ao menos 1 banheiro")
      .typeError("O número de banheiros deve ser um valor numérico"),
    description: Yup.string().max(
      500,
      "A descrição deve ter no máximo 500 caracteres"
    ),
    contact: Yup.string(),
    offer: Yup.boolean(),
  })

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    const loadFilterData = async () => {
      const { categories } = await selectData()
      setCategories(categories)
    }

    loadFilterData()
  }, [])

  useEffect(() => {
    if (property && categories.length > 0) {
      const formattedContact = formatPhoneNumber(property.contact || "")
      setPhoneNumber(formattedContact)

      reset({
        ...property,
        contact: formattedContact,
        category: property.category?.id || "",
      })

      setValue("category", property.category?.id || "")
    }
  }, [property, categories, setValue, reset])

  const onSubmit = async (data) => {
    console.log("Dados enviados:", data)

    try {
      const formData = new FormData()
      Object.keys(data).forEach((key) => formData.append(key, data[key]))

      Array.from(selectedFiles).forEach((file) =>
        formData.append("files", file)
      )

      const response = await api.put(`/properties/${property.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (response.status === 200) {
        toast.success("Imóvel atualizado com sucesso!")
        navigate("/admin/gerenciar-imoveis")
      }
    } catch (err) {
      toast.error("Erro ao atualizar o imóvel. Tente novamente.")
    }
  }

  const handleFileChange = (event) => {
    const files = event.target.files
    setSelectedFiles(files)
  }

  const onPhoneNumberChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value)
    setPhoneNumber(formattedPhoneNumber)
  }

  return (
    <Container>
      <h1>Cadastrar Novo Imóvel</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <InputLabel>Nome do Imóvel</InputLabel>
          <Input {...register("name")} placeholder="Ex: Apartamento Village" />
          {errors.name && <Errors>{errors.name.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Preço</InputLabel>
          <Input {...register("price")} placeholder="R$ 0,00" type="number" />
          {errors.price && <Errors>{errors.price.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Endereço</InputLabel>
          <Input
            {...register("address")}
            placeholder="Ex: Rua da Saudade, 45, Bl 1, Ap 301"
          />
          {errors.address && <Errors>{errors.address.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Bairro</InputLabel>
          <Input
            {...register("neighborhood")}
            placeholder="Digite o nome do bairro..."
          />
          {errors.neighborhood && (
            <Errors>{errors.neighborhood.message}</Errors>
          )}
        </InputWrap>

        <InputWrap>
          <InputLabel>Nome do Condomínio</InputLabel>
          <Input
            {...register("town_house")}
            placeholder="Digite o nome do condomínio..."
          />
          {errors.town_house && <Errors>{errors.town_house.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Status</InputLabel>
          <Select {...register("status")}>
            <option value="Pronto">Pronto</option>
            <option value="Em construção">Em construção</option>
          </Select>
          {errors.status && <Errors>{errors.status.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Tipo do imóvel</InputLabel>
          <Select
            {...register("category", {
              onChange: (e) => setValue("category_id", e.target.value),
            })}
          >
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
          <InputLabel>Dimensões (m²)</InputLabel>
          <Input
            type="number"
            {...register("dimensions")}
            placeholder="Digite as dimensões..."
          />
          {errors.dimensions && <Errors>{errors.dimensions.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Quartos</InputLabel>
          <Input
            {...register("rooms")}
            placeholder="Número de quartos..."
            type="number"
          />
          {errors.rooms && <Errors>{errors.rooms.message}</Errors>}
        </InputWrap>

        <InputWrap>
          <InputLabel>Vagas de Estacionamento</InputLabel>
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
          <InputLabel>Banheiros</InputLabel>
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
          <InputLabel>Contato</InputLabel>

          <Input
            {...register("contact")}
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            placeholder="(00) 00000-0000"
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
        </InputWrap>

        <InputWrap>
          <CheckboxWrap>
            <InputLabel>Em Destaque</InputLabel>
            <input
              style={{ marginLeft: "15px", scale: "1.3" }}
              {...register("offer")}
              type="checkbox"
            />
          </CheckboxWrap>
        </InputWrap>

        <RegisterWrap>
          <DefaultButton type="submit">Atualizar Imóvel</DefaultButton>
        </RegisterWrap>
      </form>
    </Container>
  )
}

export default EditProperty
