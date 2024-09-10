import { useEffect, useRef, useState } from "react"

import api from "../../services/api"
import { useUser } from "../../hooks/UserContext"

import * as Yup from "yup"
import toast, { Toaster } from "react-hot-toast"

import {
  Container,
  RegisterContainer,
  InputLabel,
  RegisterWrap,
  Input,
  TableContainer,
  TableHeader,
  TableRow,
  TableData,
  IconButton,
} from "./styles"

import DefaultButton from "../../components/DefaultButton"

import { FaEdit, FaTrashAlt } from "react-icons/fa"

const CategoryRegister = () => {
  const { userData } = useUser()
  const [categories, setCategories] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get("/categories")
      setCategories(data)
    }
    getCategories()
  }, [categories])

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("O nome da categoria é obrigatório")
      .min(4, "O nome deve ter pelo menos 3 caracteres"),
  })

  const handleCategorySubmit = async () => {
    const newCategory = inputRef.current.value

    try {
      await schema.validate({
        name: newCategory,
      })

      setIsSubmitting(true)
      const { data } = await api.post("/categories", { name: newCategory })
      setCategories((prevCategories) => [...prevCategories, data])
      inputRef.current.value = ""

      toast.success("Categoria cadastrada com sucesso!")
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error("Verifique se os dados estão corretos")
      } else {
        toast.error("Falha no sistema, tente novamente mais tarde")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <h1>Cadastrar Categoria</h1>
      <RegisterContainer>
        <InputLabel>Nome da Categoria</InputLabel>
        <RegisterWrap>
          <Input ref={inputRef} placeholder="Digite aqui..." />
          <DefaultButton onClick={handleCategorySubmit} disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </DefaultButton>
        </RegisterWrap>
      </RegisterContainer>

      <div>
        <h1>Categorias Cadastradas</h1>
        <TableContainer>
          <TableHeader>
            <TableRow>
              <TableData>ID</TableData>
              <TableData>Nome da Categoria</TableData>
              <TableData>Ações</TableData>
            </TableRow>
          </TableHeader>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableData>{category.id}</TableData>
              <TableData>{category.name}</TableData>
              <TableData>
                <IconButton>
                  <FaEdit />
                </IconButton>
                <IconButton>
                  <FaTrashAlt />
                </IconButton>
              </TableData>
            </TableRow>
          ))}
        </TableContainer>
      </div>
    </Container>
  )
}

export default CategoryRegister
