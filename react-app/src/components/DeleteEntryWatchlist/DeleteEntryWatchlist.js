import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeFromWatchlist } from '../../store/watchlist'

function DeleteEntryWatchlist({ id, userList }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRemove = async (e) => {
        e.preventDefault()

        const entry = userList.find(movie => movie.movie_id == id)
        const entryId = entry.id

        let entryDeleted = await dispatch(removeFromWatchlist(entryId))
        if (entryDeleted) {
            return history.push('/watchlist')
        }

    }

    return (
        <button onClick={handleRemove}>Remove from Watchlist</button>
    )
}

export default DeleteEntryWatchlist
