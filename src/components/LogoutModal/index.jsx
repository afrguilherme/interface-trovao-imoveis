import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

import { useUser } from "../../hooks/UserContext.jsx"

import { Container, ModalBox, ModalButtons } from "./styles"

import DefaultButton from "../DefaultButton"

const LogoutModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null
  }

  const navigate = useNavigate()
  const { putUserData, userData } = useUser()

  const logout = () => {
    try {
      localStorage.removeItem("trovaoimoveis:userData")
      putUserData({})

      navigate("/login")
      document.body.style.overflow = "auto"

      toast.success("Você saiu da sua conta com sucesso")
    } catch (err) {
      toast.error("Falha no sistema")
    }
  }

  return (
    <Container>
      <ModalBox>
        <p>Tem certeza que deseja desconectar?</p>
        <ModalButtons>
          <DefaultButton
            onClick={() => {
              logout()
            }}
            $primary
          >
            Sim
          </DefaultButton>
          <DefaultButton onClick={onClose}>Cancelar</DefaultButton>
        </ModalButtons>
      </ModalBox>
    </Container>
  )
}

export default LogoutModal
