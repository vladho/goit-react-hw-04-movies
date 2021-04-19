import React from "react"
import MovieList from "../MovieList/MovieList"
import style from "./Trending.module.css"

const Trending = ({ movies }) => {
  return (
    <>
      <h2 className={style.title}> Trending today</h2>
      <MovieList movies={movies} />
    </>
  )
}

export default Trending
