import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewMovies } from "../store/movies"

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
        <div>
            <br />
            <br />
            <br />
            <br />
            <div>
                {movies.map((movie) => (
                    <div>
                        <img src={movie.img_one}/>
                        <p>{movie.name}</p>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies
