import {
  Container,
  FormContainer,
  Logo,
  Form,
  Input,
  Divider,
  GoogleButton,
} from "./styles"

import DefaultButton from "../../components/DefaultButton"

import LogoImage from "../../assets/logo.png"
import GoogleLogo from "../../assets/google-logo.webp"

function Login() {
  return (
    <Container>
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
            <DefaultButton style={{ padding: "12px 0" }}>Entrar</DefaultButton>
          </div>
        </Form>
        <Divider>ou entre com sua rede</Divider>
        <GoogleButton>
          <img src={GoogleLogo} alt="logo-google" />
          Entrar com Google
        </GoogleButton>
      </FormContainer>
    </Container>
  )
}

export default Login
