import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import './SingleMovie.css'

const SingleMovie = () => {
    const movieIdObj = useParams()
    const movieId = movieIdObj.id

    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    const movie = movies.find(movie => movie.id == movieId)

    return (
        <div className='single-movie-container'>
            <p className='single-movie-name'>{movie.name}</p>
            <img src={movie.img_two} className='single-movie-img' />
            <img src={movie.img_three} className='single-movie-img' />
            <img src={movie.img_four} className='single-movie-img' />
            <p className='single-movie-description'>{movie.description}</p>
        </div>
    )
}

export default SingleMovie
