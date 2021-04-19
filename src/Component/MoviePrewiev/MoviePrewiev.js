import React from "react"
import style from "./MoviePrewiev.module.css"

const MoviePrewiev = ({ poster_path, title }) => {
  return (
    <div className={style.block}>
      <div className={style.image}>
        <img
          className={style.image}
          src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : `https://static.wikia.nocookie.net/animated_inanimate_battle/images/a/a3/Image-not-found.png/revision/latest?cb=20200723230444`}
          // src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=" "
        />
      </div>
      <h2 className={style.title}>{title}</h2>
    </div>
  )
}

export default MoviePrewiev
