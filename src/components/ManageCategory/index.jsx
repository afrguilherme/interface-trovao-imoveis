import { useEffect, useRef, useState } from "react"
import api from "../../services/api"

import * as Yup from "yup"
import toast, { Toaster } from "react-hot-toast"

import {
  Container,
  FormContainer,
  InputLabel,
  RegisterWrap,
  EditWrap,
  Input,
  TableContainer,
  TableHeader,
  TableRow,
  TableData,
  IconButton,
} from "./styles"

import DefaultButton from "../DefaultButton"

import { FaEdit, FaTrashAlt } from "react-icons/fa"

const ManageCategory = () => {
  const [categories, setCategories] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inputRef = useRef()
  const editIdRef = useRef()
  const editNameRef = useRef()

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get("/categories")
      setCategories(data)
    }
    getCategories()
  }, [])

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("O nome da categoria é obrigatório")
      .min(4, "O nome da categoria deve ter pelo menos 4 caracteres")
      .matches(
        /^[A-Za-zÀ-ÿ\s]+$/,
        "O nome da categoria não pode conter números"
      ),
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
        toast.error(error.errors[0])
      } else if (error.response && error.response.status === 400) {
        toast.error("Categoria já cadastrada, tente outro nome")
      } else {
        toast.error("Falha no sistema, tente novamente mais tarde")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditCategory = async () => {
    const categoryId = editIdRef.current.value
    const updatedName = editNameRef.current.value

    try {
      await schema.validate({ name: updatedName })

      setIsSubmitting(true)
      await api.put(`/categories/${categoryId}`, { name: updatedName })
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === parseInt(categoryId)
            ? { ...category, name: updatedName }
            : category
        )
      )
      editIdRef.current.value = ""
      editNameRef.current.value = ""

      toast.success("Categoria editada com sucesso!")
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error(error.errors[0])
      } else if (error.response && error.response.status === 404) {
        toast.error("Categoria não encontrada, verifique o ID correto")
      } else {
        toast.error("Falha ao editar a categoria, tente novamente mais tarde")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteCategory = async (id) => {
    try {
      await api.delete(`categories/${id}`)
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      )

      toast.success("Categoria deletada com sucesso!")
    } catch (error) {
      toast.error("Erro ao deletar a categoria, tente novamente mais tarde")
    }
  }

  return (
    <Container>
      <h1>Cadastrar Categoria</h1>
      <FormContainer>
        <InputLabel>Nome da Categoria</InputLabel>
        <RegisterWrap>
          <Input
            ref={inputRef}
            placeholder="Digite o nome da nova categoria..."
          />
          <DefaultButton onClick={handleCategorySubmit} disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </DefaultButton>
        </RegisterWrap>
      </FormContainer>

      <div>
        <h1>Editar Categoria</h1>
        <FormContainer>
          <InputLabel>Id da Categoria</InputLabel>
          <EditWrap>
            <Input ref={editIdRef} placeholder="Digite o ID da categoria..." />
            <div className="bottom-wrap">
              <InputLabel>Nome da Categoria</InputLabel>
              <div className="bottom">
                <Input
                  ref={editNameRef}
                  style={{ marginRight: "20px" }}
                  placeholder="Digite o novo nome da categoria..."
                />
                <DefaultButton
                  onClick={handleEditCategory}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Editando..." : "Editar"}
                </DefaultButton>
              </div>
            </div>
          </EditWrap>
        </FormContainer>
      </div>

      <div>
        <h1>Categorias Cadastradas</h1>
        <TableContainer>
          <TableHeader>
            <TableRow>
              <TableData>ID</TableData>
              <TableData>Nome da Categoria</TableData>
              <TableData>Interação</TableData>
            </TableRow>
          </TableHeader>
          {categories &&
            categories.map((category) => (
              <TableRow key={category.id}>
                <TableData>{category.id}</TableData>
                <TableData>{category.name}</TableData>
                <TableData>
                  <IconButton>
                    <FaTrashAlt
                      onClick={() => handleDeleteCategory(category.id)}
                    />
                  </IconButton>
                </TableData>
              </TableRow>
            ))}
        </TableContainer>
      </div>
    </Container>
  )
}

export default ManageCategory
