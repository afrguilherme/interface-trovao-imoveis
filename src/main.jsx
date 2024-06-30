import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import { GlobalStyles } from "./GlobalStyles"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
)
