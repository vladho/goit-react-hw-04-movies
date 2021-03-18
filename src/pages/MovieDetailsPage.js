import React, { Component } from "react";
import {
  fetchMoviesDetailsApi,
  fetchMoviesImageApi,
} from "../services/movies-api";

class MovieDetailsPage extends Component {
  state = {
    image: { title: "dfsf" },
  };

  componentDidMount() {
    const moveiId = this.props.match.params;
    // console.log(moveiId);
    // console.log(this.props.match.params);
    // const tezt = { moveiId };
    // fetchMoviesDetailsApi(moveiId).then((response) => console.log(response));
    fetchMoviesDetailsApi(moveiId).then((response) =>
      this.setState({ image: response.data })
    );
  }
  render() {
    // console.log(this.props.match.params.movieId);
    const image = this.state.image;
    console.log(image.title);
    // console.log(this.state.image.map((el) => el.title));
    return <h1>Фильмы</h1>;
  }
}

export default MovieDetailsPage;
