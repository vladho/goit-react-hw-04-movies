import React from "react"
import style from "./MoviePrewiev.module.css"
// import {withRouter} from "react-router-dom"

const MoviePrewiev = ({ poster_path, title }) => {
  return (
    <div className={style.block}>
      <div className={style.image}>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt=" " />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  )
}

export default MoviePrewiev
