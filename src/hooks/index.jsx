import { UserProvider } from "./UserContext"
import { FavoritesProvider } from "./FavoritesContext"

const AppProvider = ({ children }) => (
  <UserProvider>
    <FavoritesProvider>{children}</FavoritesProvider>
  </UserProvider>
)

export default AppProvider
