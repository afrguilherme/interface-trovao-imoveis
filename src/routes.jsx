import { createBrowserRouter } from "react-router-dom"
import React from "react"

import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Login from "./pages/Login"
import Layout from "./components/Layout"

const router = createBrowserRouter([
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
])

export default router
