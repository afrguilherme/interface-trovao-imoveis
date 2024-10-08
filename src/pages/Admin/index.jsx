import { Outlet, useLocation } from "react-router-dom"

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
  const location = useLocation()

  const menuItems = [
    {
      path: "/admin/cadastrar-imoveis",
      label: "Cadastrar Imóveis",
      icon: AddPropertyIcon,
    },
    {
      path: "/admin/gerenciar-imoveis",
      label: "Gerenciar Imóveis",
      icon: PropertyLapTopIcon,
    },

    {
      path: "/admin/gerenciar-categorias",
      label: "Gerenciar Categorias",
      icon: AddCategoryIcon,
    },
    {
      path: "/admin/gerenciar-usuarios",
      label: "Gerenciar Usuários",
      icon: UserConfigIcon,
    },
  ]

  return (
    <Container>
      <Aside>
        <ul>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = location.pathname === item.path
            return (
              <li key={index} selected={isActive}>
                <IconComponent selected={isActive} />
                <LinkStyles to={item.path} selected={isActive}>
                  {item.label}
                </LinkStyles>
              </li>
            )
          })}
        </ul>
      </Aside>

      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

export default Admin
