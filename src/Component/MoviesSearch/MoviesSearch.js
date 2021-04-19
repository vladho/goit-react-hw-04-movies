import React from "react"
import MovieList from "../MovieList/MovieList"
import style from "./MoviesSearch.module.css"

const MoviesSearch = ({ handleSubmit, handleChange, movies, value }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input onChange={handleChange} value={value} />
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
      {movies !== undefined && <MovieList movies={movies} />}
    </>
  )
}

export default MoviesSearch
