const { createContext, useState, useContext } = require('react')

// TS를 사용하지 않는 상황에서 자동완성기능을 향상시키기 위해 메서드에 매개변수를 추가함.
const defaultContextValue = {
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
}

const FavoritesContext = createContext(defaultContextValue)

export const useFavorites = () => useContext(FavoritesContext)

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavorite = (favoriteMeetup) => {
    // 함수로 업데이트해서 즉각적으로 반영될 수 있게 한다.
    setUserFavorites((prevUserFavorites) => {
      return [...prevUserFavorites, favoriteMeetup]
    })
  }

  const removeFavorite = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  const itemIsFavorite = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite,
    removeFavorite,
    itemIsFavorite,
  }

  return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>
}
