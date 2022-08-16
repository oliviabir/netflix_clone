import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { addToWatchlist } from "../../store/watchlist";
import './SingleMovie.css'

const SingleMovie = () => {
    const dispatch = useDispatch()
    const movieIdObj = useParams()
    const movieId = movieIdObj.id

    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    const sessionUser = useSelector((state) => state.session.user);

    const movie = movies.find(movie => movie.id == movieId)

    const handleWatchlist = async () => {
        const user_id = sessionUser.id

        const payload = {
            user_id,
            movie_id: movie.id
        }

        await dispatch(addToWatchlist(payload))
    }

    return (
        <div className='single-movie-container'>
            <p className='single-movie-name'>{movie?.name}</p>
            <img src={movie?.img_two} className='single-movie-img' />
            <img src={movie?.img_three} className='single-movie-img' />
            <img src={movie?.img_four} className='single-movie-img' />
            <p className='single-movie-description'>{movie?.description}</p>
            <button onClick={handleWatchlist}>Add to Watchlist</button>
        </div>
    )
}

export default SingleMovie
