import React, { Component } from "react";
import MovieList from "../Component/MovieList/MovieList";
import { fetchMoviesSearchApi } from "../services/movies-api";

class Movies extends Component {
  state = {
    query: "",
    // movies: null,
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState(query)
    // console.log(this.state.query);
    fetchMoviesSearchApi(this.state.query).then((responce) =>
      this.setState({ movies: [...responce.data.results] })
    );
    // console.log(this.state);
  };

  componentDidMount() {
    fetchMoviesSearchApi(this.state.query).then((responce) =>
      this.setState({ movies: [...responce.data.results] })
    );
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.query} />
          <button type="submit"> Search</button>
        </form>
        {this.state.movies !== undefined && (
          <MovieList movies={this.state.movies} search={this.state.query} />
        )}
        {/* {<MovieList movies={this.state.movies} />} */}
      </>
    );
  }
}

export default Movies;
