import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { Container, AdminPanelIcon, AdminPanelWrap } from "./styles"

const UserMenu = () => {
  const navigate = useNavigate()

  const userData = localStorage.getItem("trovaoimoveis:userData")
  const parsedData = JSON.parse(userData)

  const verifyAndAcces = () => {
    const isAdmin = parsedData.admin || false
    const isOperator = parsedData.operator || false

    if (isAdmin || isOperator) {
      navigate("/admin")
    } else {
      toast.error(
        "Você não tem permissão para acessar o painel de gerenciadores"
      )
    }
  }

  return (
    <Container>
      <AdminPanelWrap onClick={verifyAndAcces}>
        <AdminPanelIcon />
        <p>Painel de Gerenciadores</p>
      </AdminPanelWrap>
    </Container>
  )
}

export default UserMenu
