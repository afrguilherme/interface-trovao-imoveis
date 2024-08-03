import { createBrowserRouter } from "react-router-dom"
import React from "react"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Favorites from "./pages/Favorites"

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
])

export default router
