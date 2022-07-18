import React, { useCallback, useMemo } from 'react'
import { useFavorites } from '../../store/favorites-context'
import { Card } from '../ui'
import classes from './MeetupItem.module.css'

const MeetupItem = ({ meetup }) => {
  const favoritesCtx = useFavorites()
  const { id, title, image, address, description } = meetup
  const itemIsFavorite = useMemo(() => favoritesCtx.itemIsFavorite(id), [favoritesCtx, id])

  const handleToggleFavoritesStatus = useCallback(
    (e) => {
      if (itemIsFavorite) {
        favoritesCtx.removeFavorite(id)
        return
      }

      favoritesCtx.addFavorite({ ...meetup })
    },
    [favoritesCtx, meetup, id, itemIsFavorite]
  )

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavoritesStatus}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
