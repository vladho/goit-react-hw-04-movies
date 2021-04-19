import React from "react";
import style from "./MovieDetailsPageInfo.module.css";
import MovieAdditionalInformation from "../MovieAdditionalInformation/MovieAdditionalInformation";

const MovieDetailsPageInfo = ({
  movie,
  path,
  url,
  popularity,
  genres,
  handleGoBack,
  location,
  match,
}) => {
  return (
    <div className={style.block}>
      <button type="button" onClick={handleGoBack} className={style.button}>
        вернуться назад
      </button>

      <div className={style.page}>
        {movie.poster_path !== "" && (
          <img
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt=" "
          />
        )}
        <div className={style.views}>
          <h2>{movie.title}</h2>
          <p>{`user score ${popularity}%`}</p>
          <h3>overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>

      <MovieAdditionalInformation
        path={path}
        url={url}
        location={location}
        match={match}
      />
    </div>
  );
};

export default MovieDetailsPageInfo;
