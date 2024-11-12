import { createBrowserRouter } from "react-router-dom"
import { Navigate } from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../pages/Home"
import Properties from "../pages/Properties"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Favorites from "../pages/Favorites"
import PropertyDetails from "../pages/PropertyDetails"

import Admin from "../pages/Admin"
import ManageProperties from "../components/ManageProperties"
import EditProperty from "../components/EditProperty"
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
    path: "/imoveis/:id",
    element: (
      <Layout>
        <PropertyDetails />
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
          <Navigate to="/admin/cadastrar-imoveis" replace />
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
        path: "gerenciar-imoveis",
        element: <ManageProperties />,
      },
      {
        path: `editar-imovel/:id`,
        element: <EditProperty />,
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
