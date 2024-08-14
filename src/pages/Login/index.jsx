import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

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
import { useUser } from "../../hooks/UserContext.jsx"

function Login() {
  const navigate = useNavigate()

  const { putUserData, userData } = useUser()

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      navigate("/")
    }
  }, [userData])

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

  const onSubmit = async (info) => {
    try {
      const { status, data } = await api.post(
        "session",
        {
          email: info.email,
          password: info.password,
        },
        { validateStatus: () => true }
      )

      if (status === 200) {
        putUserData(data)
        toast.success("Seja bem vindo!")
      } else if (status === 401) {
        toast.error("Dados incorretos")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema")
    }
  }

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
