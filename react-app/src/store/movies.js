const VIEW_MOVIES = 'movies/VIEW_MOVIES'

const view = (movies) => ({
    type: VIEW_MOVIES,
    movies,
})

export const viewMovies = () => async (dispatch) => {
    const response = await fetch('/api/movies/')

    if (response.ok) {
        const movies = await response.json()
        dispatch(view(movies))
    }
}

const moviesReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_MOVIES:
            const normalizedMovies = {}
            action.movies.movies.forEach((movie) => {
                normalizedMovies[movie.id] = movie
            })
            return { ...normalizedMovies }
        default:
            return state
    }
}

export default moviesReducer
