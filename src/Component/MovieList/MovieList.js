import React from "react";
import { Link, withRouter } from "react-router-dom";
import MoviePrewiev from "../MoviePrewiev/MoviePrewiev";
import style from "./MovieList.module.css";

const MovieList = ({ movies, location, search }) => {
  console.log(location);
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {/* {this.state.movies !== null && */}
        {movies.map((el) => (
          // console.log(el)
          <li key={el.id}>
            <Link
              to={{
                pathname: `Movies/${el.id}`,
                state: { from: location },
                search: `query=${search}`,
              }}
            >
              {/* {el.title} */}
              <MoviePrewiev title={el.title} poster_path={el.poster_path} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MovieList);
