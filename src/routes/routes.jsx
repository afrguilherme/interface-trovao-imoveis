import { createBrowserRouter } from "react-router-dom"
import { Navigate } from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../pages/Home"
import Properties from "../pages/Properties"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Favorites from "../pages/Favorites"

import Admin from "../pages/Admin"
import PropertyList from "../components/PropertyList"
import PropertyRegister from "../components/PropertyRegister"
import ManageCategory from "../components/ManageCategory"
import ManageUser from "../components/ManageUser"

import PrivateRoute from "./privateRoute"

const router = createBrowserRouter([
  {
    path: "/cadastrar",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/imoveis",
    element: (
      <Layout>
        <Properties />
      </Layout>
    ),
  },
  {
    path: "/favoritos",
    element: (
      <Layout>
        <Favorites />
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Layout>
          <Navigate to="/admin/listar-imoveis" replace />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Layout>
          <Admin />
        </Layout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "listar-imoveis",
        element: <PropertyList />,
      },
      {
        path: "cadastrar-imoveis",
        element: <PropertyRegister />,
      },
      {
        path: "gerenciar-categorias",
        element: <ManageCategory />,
      },
      {
        path: "gerenciar-usuarios",
        element: <ManageUser />,
      },
    ],
  },
])

export default router
