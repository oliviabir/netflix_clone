const ADD_TO_WATCHLIST = 'watchlist/ADD_TO_WATCHLIST'
const VIEW_WATCHLIST = 'watchlist/VIEW_WATCHLIST'
const DELETE_ENTRY = 'watchlist/DELETE_ENTRY'

const addMovie = (movie) => ({
    type: ADD_TO_WATCHLIST,
    movie
})

const view = (watchlists) => ({
    type: VIEW_WATCHLIST,
    watchlists
})

const remove = (entry) => ({
    type: DELETE_ENTRY,
    entry
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

export const removeFromWatchlist = (id) => async (dispatch) => {
    const response = await fetch(`/api//watchlist/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(remove(id))
        return response
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
        case DELETE_ENTRY:
            const deleteState = {...state}
            delete deleteState[action.entry]
            return deleteState
        default:
            return state
    }
}

export default watchlistReducer
