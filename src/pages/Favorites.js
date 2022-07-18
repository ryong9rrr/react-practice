import React from 'react'
import { MeetupList } from '../components/meetups'
import { useFavorites } from '../store/favorites-context'

const FavoritesPage = () => {
  const favoritesCtx = useFavorites()

  let content = null
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default React.memo(FavoritesPage)
