import { createContext, useContext, useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

import { useUser } from "./UserContext"

const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }) => {
  const [favoritesProperties, setFavoritesProperties] = useState([])
  const [favoritesLoaded, setFavoritesLoaded] = useState(false)
  const { userData, loadingUserData } = useUser()

  const isEmptyObject = (obj) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object
  }

  const putFavorites = async (property) => {
    if (!userData || isEmptyObject(userData)) {
      toast.error("Faça login para favoritar anúncios")
      return null
    }

    const storedFavorites =
      JSON.parse(
        localStorage.getItem(`trovaoimoveis:favoritesInfo-${userData.id}`)
      ) || []

    const isFavorite = storedFavorites.some((fav) => fav.id === property.id)

    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter(
        (fav) => fav.id !== property.id
      )
      setFavoritesProperties(updatedFavorites)

      try {
        localStorage.setItem(
          `trovaoimoveis:favoritesInfo-${userData.id}`,
          JSON.stringify(updatedFavorites)
        )
        toast.success("Imóvel removido dos favoritos")
      } catch (err) {
        toast.error("Falha ao remover dos favoritos")
      }
    } else {
      const updatedFavorites = [...storedFavorites, property]
      setFavoritesProperties(updatedFavorites)

      try {
        localStorage.setItem(
          `trovaoimoveis:favoritesInfo-${userData.id}`,
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
        `trovaoimoveis:favoritesInfo-${userData.id}`,
        JSON.stringify(updatedFavorites)
      )
      toast.success("Imóvel removido dos favoritos")
    } catch (err) {
      toast.error("Falha ao remover dos favoritos")
    }
  }

  useEffect(() => {
    const loadFavoritesData = async () => {
      if (!loadingUserData && userData && userData.id) {
        const clientFavoritesData = await localStorage.getItem(
          `trovaoimoveis:favoritesInfo-${userData.id}`
        )
        if (clientFavoritesData) {
          setFavoritesProperties(JSON.parse(clientFavoritesData))
        } else {
          setFavoritesProperties([])
        }
        setFavoritesLoaded(true)
      }
    }
    loadFavoritesData()
  }, [userData, loadingUserData])

  useEffect(() => {
    if (favoritesLoaded) {
      const handleStorageChange = (event) => {
        if (event.key === `trovaoimoveis:favoritesInfo-${userData.id}`) {
          setFavoritesProperties(JSON.parse(event.newValue) || [])
        }
      }
      window.addEventListener("storage", handleStorageChange)
      return () => {
        window.removeEventListener("storage", handleStorageChange)
      }
    }
  }, [favoritesLoaded, userData])

  return (
    <FavoritesContext.Provider
      value={{
        putFavorites,
        favoritesProperties,
        removeFavorite,
        isEmptyObject,
      }}
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
