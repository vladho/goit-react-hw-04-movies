import React from "react"
import { Route } from "react-router"
import { NavLink } from "react-router-dom"
import { pathName } from "../../routes/appRoutes"
import Cast from "../Cast/Cast"
import Reviews from "../Reviews/Reviews"
import style from "./MovieDetailsPageInfo.module.css"

const MovieDetailsPageInfo = ({ movie, path, url, popularity, genres, handleGoBack, location, match }) => {
  return (
    <div className={style.block}>
      <button type="button" onClick={handleGoBack} className={style.button}>
        вернуться назад
      </button>

      <div className={style.page}>
        {movie.poster_path !== "" && <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt=" " />}
        <div className={style.views}>
          <h2>{movie.title}</h2>
          <p>{`user score ${popularity}%`}</p>
          <h3>overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>

      <div>
        <p>additional informtion</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location?.state?.from || pathName.home,
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location?.state?.from || pathName.home,
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path={`${path}/cast`} render={() => <Cast moveiId={match.params} />} />
        <Route path={`${path}/reviews`} render={() => <Reviews moveiId={match.params} />} />
      </div>
    </div>
  )
}

export default MovieDetailsPageInfo
