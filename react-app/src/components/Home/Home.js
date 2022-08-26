import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { viewMovies } from "../../store/movies"
import './Home.css'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewMovies())
    }, [dispatch])

    const movies = useSelector((state) => {
        return Object.values(state.movies)
    })

    return (
        <div className='wrapper'>
            <section id='section-1'>
                <Link to='#section-3'></Link>
            </section>
        </div>
    )
}

export default Home
