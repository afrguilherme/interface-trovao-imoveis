import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const isAuthenticated = () => {
    const storedUserData = localStorage.getItem("trovaoimoveis:userData")

    if (!storedUserData) {
      return false
    }

    const userData = JSON.parse(storedUserData)

    return userData.admin || userData.operator
  }

  return isAuthenticated() ? children : <Navigate to="/" replace />
}

export default PrivateRoute
