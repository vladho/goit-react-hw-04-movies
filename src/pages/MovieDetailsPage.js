import React, { Component } from "react";
import {
  fetchMoviesDetailsApi,
  fetchMoviesImageApi,
} from "../services/movies-api";

class MovieDetailsPage extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    const { moveId } = this.props.match.params.movieId;
    const tezt = { moveId };
    fetchMoviesDetailsApi(tezt).then((response) => console.log(response));
    // fetchMoviesDetailsApi(test).then((response) =>
    //   this.setState({ image: response.data })
    // );
  }
  render() {
    console.log(this.props.match.params.movieId);
    console.log(this.state.image);
    return <h1>Фильмы</h1>;
  }
}

export default MovieDetailsPage;
