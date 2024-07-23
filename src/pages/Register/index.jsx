import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import toast, { Toaster } from "react-hot-toast"

import api from "../../services/api"

import {
  Container,
  BackButton,
  FormContainer,
  Logo,
  Input,
  Divider,
  GoogleButton,
  LoginOption,
} from "./styles"

import DefaultButton from "../../components/DefaultButton"
import ErrorMessage from "../../components/ErrorMessage"

import LogoImage from "../../assets/logo.png"
import GoogleLogo from "../../assets/google-logo.webp"

import { useUser } from "../../hooks/UserContext.jsx"

function Register() {
  const { userData, putUserData } = useUser()

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      navigate("/")
    }
  }, [userData])

  const schema = Yup.object().shape({
    name: Yup.string("Digite um nome válido").required(
      "O campo nome é obrigatório"
    ),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string()
      .required("O campo senha é obrigatório")
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
    confirmPassword: Yup.string()
      .required("O campo senha é obrigatório")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success("Usuário cadastrado com sucesso")
      } else if (status === 409) {
        toast.error("Este email já está cadastrado")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema")
    }
  }

  const navigate = useNavigate()

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
      <FormContainer>
        <Logo>
          <button onClick={() => navigate("/")}>
            <img src={LogoImage} alt="logo" />
          </button>
        </Logo>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              placeholder="Nome"
              type="text"
              {...register("name")}
              $error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>

          <div>
            <Input
              type="email"
              placeholder="E-mail"
              {...register("email")}
              $error={errors.name?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>

          <div>
            <Input
              type="password"
              placeholder="Senha"
              {...register("password")}
              $error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>

          <div>
            <Input
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword")}
              $error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          </div>

          <div>
            <DefaultButton type="submit" style={{ padding: "12px 0" }}>
              Cadastrar
            </DefaultButton>
          </div>
        </form>
        <Divider>ou cadastre com sua rede</Divider>
        <GoogleButton>
          <img src={GoogleLogo} alt="logo-google" />
          Cadastrar com Google
        </GoogleButton>

        <LoginOption>
          Já possui uma conta? <a href="/login">Faça login aqui!</a>
        </LoginOption>
      </FormContainer>
    </Container>
  )
}

export default Register
