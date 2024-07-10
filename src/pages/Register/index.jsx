import {
  Container,
  BackButton,
  FormContainer,
  Logo,
  Form,
  Input,
  Divider,
  GoogleButton,
} from "./styles"

import { useNavigate } from "react-router-dom"

import DefaultButton from "../../components/DefaultButton"

import LogoImage from "../../assets/logo.png"
import GoogleLogo from "../../assets/google-logo.webp"

function Register() {
  const navigate = useNavigate()

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
      <FormContainer>
        <Logo>
          <img src={LogoImage} alt="logo" />
        </Logo>
        <Form>
          <div>
            <Input placeholder="Nome" />
          </div>

          <div>
            <Input type="email" placeholder="E-mail" />
          </div>

          <div>
            <Input type="password" placeholder="Senha" />
          </div>

          <div>
            <Input type="password" placeholder="Confirmar Senha" />
          </div>

          <div>
            <DefaultButton style={{ padding: "12px 0" }}>Entrar</DefaultButton>
          </div>
        </Form>
        <Divider>ou cadastre com sua rede</Divider>
        <GoogleButton>
          <img src={GoogleLogo} alt="logo-google" />
          Cadastrar com Google
        </GoogleButton>
      </FormContainer>
    </Container>
  )
}

export default Register
