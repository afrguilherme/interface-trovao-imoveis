import { Outlet } from "react-router-dom"

import {
  Container,
  Main,
  Aside,
  LinkStyles,
  PropertyLapTopIcon,
  AddPropertyIcon,
  AddCategoryIcon,
  UserConfigIcon,
} from "./styles"

function Admin() {
  return (
    <Container>
      <Aside>
        <ul>
          <li>
            <PropertyLapTopIcon />
            <LinkStyles to="/admin/listar-imoveis">Listar Imóveis</LinkStyles>
          </li>
          <li>
            <AddPropertyIcon />
            <LinkStyles to="/admin/cadastrar-imoveis">
              Cadastrar Imóveis
            </LinkStyles>
          </li>
          <li>
            <AddCategoryIcon />
            <LinkStyles to="/admin/cadastrar-categorias">
              Cadastrar Categorias
            </LinkStyles>
          </li>
          <li>
            <UserConfigIcon />
            <LinkStyles to="/admin/gerenciar-usuarios">
              Gerenciar Usuários
            </LinkStyles>
          </li>
        </ul>
      </Aside>

      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

export default Admin
