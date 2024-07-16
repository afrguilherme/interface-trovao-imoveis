import React from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider } from "react-router-dom" // Remova BrowserRouter se estava importado e não utilizado
import router from "./routes.jsx"

import { GlobalStyles } from "./GlobalStyles"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </React.StrictMode>
)
