import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { viewWatchlist } from "../../store/watchlist"
import './Watchlist.css'

const Watchlist = () => {
    const watchlists = useSelector((state) => {
        return Object.values(state.watchlist)
    })

    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    const sessionUser = useSelector((state) => state.session.user);
    const userList = watchlists.filter(watchlist => watchlist.user_id == sessionUser.id)
    const userMovies = []
    userList.forEach(entry => {
        const movie = movies.filter(movie => movie.id == entry.movie_id)
        userMovies.push(movie)
    })

    return (
        <div>
            <p>Watch List</p>
            {userMovies.map((movie) => (
                <Link to={`/movies/${movie[0].id}`} key={movie[0].id}>
                    <p className='movie-name'>{movie[0].name}</p>
                    <img src={movie[0].img_one} className='movie-img' />
                </Link>
            ))}
        </div>
    )
}

export default Watchlist
