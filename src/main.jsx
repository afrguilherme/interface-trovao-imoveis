import React from "react"
import ReactDOM from "react-dom/client"

import AppProvider from "./hooks"

import { RouterProvider } from "react-router-dom"
import router from "./routes.jsx"

import { GlobalStyles } from "./GlobalStyles"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Toaster position="bottom-right" />
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
)
