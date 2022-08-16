import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { viewMovies } from "../store/movies"

const SingleMovie = () => {
    const movieIdObj = useParams()
    const movieId = movieIdObj.id

    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    const movie = movies.find(movie => movie.id == movieId)

    return (
        <div>
            <p>{movie.name}</p>
            <img src={movie.img_one}/>
            <img src={movie.img_two}/>
            <img src={movie.img_three}/>
            <img src={movie.img_four}/>
            <p>{movie.description}</p>
        </div>
    )
}

export default SingleMovie
