import { useState } from "react"
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
  const [activeIndex, setActiveIndex] = useState(0)

  const menuItems = [
    {
      path: "/admin/listar-imoveis",
      label: "Listar Imóveis",
      icon: PropertyLapTopIcon,
    },
    {
      path: "/admin/cadastrar-imoveis",
      label: "Cadastrar Imóveis",
      icon: AddPropertyIcon,
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
            return (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                selected={activeIndex === index}
              >
                <IconComponent selected={activeIndex === index} />
                <LinkStyles to={item.path} selected={activeIndex === index}>
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
