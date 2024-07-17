import { createContext, useContext } from "react"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: "Guilherme", age: 24 }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser must be used with UserContext")
  }

  return context
}
