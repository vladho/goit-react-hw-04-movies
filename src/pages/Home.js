import React, { Component } from "react";
import { fetchMoviesTrendingApi } from "../services/movies-api";
import MovieList from "../Component/MovieList/MovieList";
import style from "./Home.module.css";

class Home extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    fetchMoviesTrendingApi().then((response) =>
      this.setState({ movies: [...response.data.results] })
    );
  }
  render() {
    return (
      <>
        <h2 className={style.title}> Trending today</h2>
        {this.state.movies !== null && <MovieList movies={this.state.movies} />}
      </>
    );
  }
}

export default Home;
