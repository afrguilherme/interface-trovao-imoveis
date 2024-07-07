import React from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider } from "react-router-dom"
import router from "./routes.jsx"
import { GlobalStyles } from "./GlobalStyles"

import Navbar from "./components/Navbar"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
