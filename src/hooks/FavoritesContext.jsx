import { createContext, useContext, useEffect, useState } from "react"

const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }) => {
  const [favoritesProperties, setFavoritesProperties] = useState([])

  const putFavorites = async (property) => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("trovaoimoveis:favoritesInfo")) || []

    const isFavorite = storedFavorites.some((fav) => fav.id === property.id)

    if (!isFavorite) {
      const updatedFavorites = [...storedFavorites, property]
      setFavoritesProperties(updatedFavorites)

      await localStorage.setItem(
        "trovaoimoveis:favoritesInfo",
        JSON.stringify(updatedFavorites)
      )
    }
  }

  useEffect(() => {
    const loadFavoritesData = async () => {
      const clientFavoritesData = await localStorage.getItem(
        "trovaoimoveis:favoritesInfo"
      )

      if (clientFavoritesData) {
        setFavoritesProperties(JSON.parse(clientFavoritesData))
      }
    }
    loadFavoritesData()
  }, [])

  return (
    <FavoritesContext.Provider value={{ putFavorites, favoritesProperties }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error("useFavorites must be used with UserContext")
  }

  return context
}
