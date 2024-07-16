import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

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
  RegisterOption,
} from "./styles"

import DefaultButton from "../../components/DefaultButton"
import ErrorMessage from "../../components/ErrorMessage"

import LogoImage from "../../assets/logo.png"
import GoogleLogo from "../../assets/google-logo.webp"

function Login() {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string()
      .required("O campo senha é obrigatório")
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const response = api.post("session", {
      email: data.email,
      password: data.password,
    })

    toast.promise(response, {
      loading: "Verificando seus dados...",
      success: (info) => {
        return `Seja bem vindo!`
      },
      error: (err) => {
        return "Dados incorretos"
      },
    })
  }

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
      <FormContainer>
        <Logo>
          <img src={LogoImage} alt="logo" />
        </Logo>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              {...register("email")}
              $error={errors.email?.message}
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
            <DefaultButton style={{ padding: "12px 0" }} type="submit">
              Entrar
            </DefaultButton>
          </div>
        </form>
        <Divider>ou entre com sua rede</Divider>
        <GoogleButton>
          <img src={GoogleLogo} alt="logo-google" />
          Entrar com Google
        </GoogleButton>
        <RegisterOption>
          Não possui uma conta? <a href="/cadastrar">Cadastre-se aqui!</a>
        </RegisterOption>
      </FormContainer>
    </Container>
  )
}

export default Login
