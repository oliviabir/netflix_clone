import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Categories = (category) => {
    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    const movieCategory = movies.filter(movie => movie.category_id == category.category)

    return (
        <div>
            {movieCategory.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <p className='movie-name' >{movie.name}</p>
                    <img src={movie.img_one} className='movie-img' />
                </Link>
            ))}
        </div>
    )
}

export default Categories
