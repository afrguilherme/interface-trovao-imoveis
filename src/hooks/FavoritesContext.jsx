import { createContext, useContext, useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

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

      try {
        await localStorage.setItem(
          "trovaoimoveis:favoritesInfo",
          JSON.stringify(updatedFavorites)
        )
        toast.success("Imóvel adicionado aos favoritos")
      } catch (err) {
        toast.error("Falha ao adicionar aos favoritos")
      }
    }
  }

  const removeFavorite = (propertyId) => {
    const updatedFavorites = favoritesProperties.filter(
      (property) => property.id !== propertyId
    )

    setFavoritesProperties(updatedFavorites)

    try {
      localStorage.setItem(
        "trovaoimoveis:favoritesInfo",
        JSON.stringify(updatedFavorites)
      )
      toast.success("Imóvel removido dos favoritos")
    } catch (err) {
      toast.error("Falha ao remover dos favoritos")
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
    <FavoritesContext.Provider
      value={{ putFavorites, favoritesProperties, removeFavorite }}
    >
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
