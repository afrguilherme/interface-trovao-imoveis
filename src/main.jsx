import React from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider } from "react-router-dom" // Remova BrowserRouter se estava importado e não utilizado
import router from "./routes.jsx"
import { GlobalStyles } from "./GlobalStyles"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
)
