import React, { Component } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import Cast from "../Component/Cast/Cast";
import Reviews from "../Component/Reviews/Reviews";
import { fetchMoviesDetailsApi } from "../services/movies-api";
import style from "./MovieDetailsPage.module.css";
import routes from "../routes";

class MovieDetailsPage extends Component {
  state = {
    movie: {
      title: "",
      vote_average: null,
      genres: [],
      poster_path: "",
    },
  };
  handleGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || routes.home);
  };

  componentDidMount() {
    const moveiId = this.props.match.params;
    fetchMoviesDetailsApi(moveiId).then((response) =>
      this.setState({ movie: response.data })
    );
  }
  render() {
    const movie = this.state.movie;
    const path = this.props.match.path;
    const url = this.props.match.url;
    const popularity = Number(movie.vote_average * 10);
    const genres = movie.genres.map((el) => el.name + " ");
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
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

        <div>
          <p>additional informtion</p>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    from: this.props.location?.state?.from || routes.home,
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
                    from: this.props.location?.state?.from || routes.home,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Route
            path={`${path}/cast`}
            render={() => <Cast moveiId={this.props.match.params} />}
          />
          <Route
            path={`${path}/reviews`}
            render={() => <Reviews moveiId={this.props.match.params} />}
          />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
