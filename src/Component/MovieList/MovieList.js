import React from "react";
import { Link, withRouter } from "react-router-dom";
import MoviePrewiev from "../MoviePrewiev/MoviePrewiev";
import style from "./MovieList.module.css";

const MovieList = ({ movies, location, search }) => {
  return (
    <ul className={style.list}>
      {movies.map((el) => (
        <li key={el.id}>
          <Link
            to={{
              pathname: `Movies/${el.id}`,
              state: { from: location },
            }}
          >
            <MoviePrewiev title={el.title} poster_path={el.poster_path} />
          </Link>
        </li>
      ))}
    </ul>
    // </div>
  );
};

export default withRouter(MovieList);
