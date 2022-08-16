const ADD_TO_WATCHLIST = 'watchlist/ADD_TO_WATCHLIST'
const VIEW_WATCHLIST = 'watchlist/VIEW_WATCHLIST'

const addMovie = (movie) => ({
    type: ADD_TO_WATCHLIST,
    movie
})

const view = (watchlists) => ({
    type: VIEW_WATCHLIST,
    watchlists
})

export const addToWatchlist = (payload) => async (dispatch) => {
    const response = await fetch('/api/watchlist/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    const newEntry = await response.json()

    if (newEntry) {
        dispatch(addMovie(newEntry))
    }

    return newEntry
}

export const viewWatchlist = () => async (dispatch) => {
    const response = await fetch('/api/watchlist/')

    if (response.ok) {
        const watchlists = await response.json()
        dispatch(view(watchlists))
    }
}

const watchlistReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            const addState = { ...state, [action.movie.id]: action.newEntry }
            return addState
        case VIEW_WATCHLIST:
            const normalizedWatchlists = {}
            action.watchlists.watchlist.forEach((watchlist) => {
                normalizedWatchlists[watchlist.id] = watchlist
            })
            return {...normalizedWatchlists}
        default:
            return state
    }
}

export default watchlistReducer
