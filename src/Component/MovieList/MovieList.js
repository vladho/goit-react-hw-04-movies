import React from "react"
import { Link, withRouter } from "react-router-dom"
import MoviePrewiev from "../MoviePrewiev/MoviePrewiev"
import style from "./MovieList.module.css"

const MovieList = ({ movies, location }) => {
  // console.log()
  return (
    <ul className={style.list}>
      {/* {this.state.movies !== null && */}
      {movies.map((el) => (
        // console.log(el)
        <li key={el.id}>
          <Link
            to={{
              pathname: `Movies/${el.id}`,
              state: { from: location },
            }}
          >
            {/* {el.title} */}
            <MoviePrewiev title={el.title} poster_path={el.poster_path} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default withRouter(MovieList)
