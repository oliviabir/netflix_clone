import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { viewMovies } from "../../store/movies"
import './Movies.css'

const Movies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewMovies())
    }, [dispatch])

    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    console.log('MOVIES: ', movies)

    return (
        <div className='movies-page'>
            <div className='movie-container'>
                {movies.map((movie) => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <p className='movie-name'>{movie.name}</p>
                        <img src={movie.img_one} className='movie-img' />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Movies
