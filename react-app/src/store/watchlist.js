const ADD_TO_WATCHLIST = 'watchlist/ADD_TO_WATCHLIST'

const addMovie = (movie) => ({
    type: ADD_TO_WATCHLIST,
    movie
})

export const addToWatchlist = (payload) => async (dispatch) => {
    const response = await fetch('/api/watchlist/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    const newEntry = await response.json()

    console.log('NEW ENTRY********', newEntry)
    if (newEntry) {
        dispatch(addMovie(newEntry))
    }

    return newEntry
}

const watchlistReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            const addState = { ...state, [action.movie.id]: action.newEntry }
            return addState
        default:
            return state
    }
}

export default watchlistReducer
