import React, { Component } from "react";
import { fetchMoviesTrendingApi } from "../services/movies-api";
import MovieList from "../Component/MovieList/MovieList";

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
        <h2> Trending today</h2>
        {this.state.movies !== null && <MovieList movies={this.state.movies} />}
      </>
    );
  }
}

export default Home;
