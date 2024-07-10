import { useLocation } from "react-router-dom"
import Navbar from "../Navbar"

const Layout = ({ children }) => {
  let location = useLocation()
  const shouldShowNavbar = location.pathname !== "/login"

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  )
}

export default Layout
