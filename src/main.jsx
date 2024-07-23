import React from "react"
import ReactDOM from "react-dom/client"

import { UserProvider } from "./hooks/UserContext.jsx"

import { RouterProvider } from "react-router-dom"
import router from "./routes.jsx"

import { GlobalStyles } from "./GlobalStyles"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Toaster position="bottom-right" />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)
