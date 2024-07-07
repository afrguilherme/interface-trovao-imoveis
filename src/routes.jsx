import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import Properties from "./pages/Properties"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/imoveis",
    element: <Properties />,
  },
])

export default router
