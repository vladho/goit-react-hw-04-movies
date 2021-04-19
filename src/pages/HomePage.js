import React, { Component } from "react"
import { fetchMoviesTrendingApi } from "../services/movies-api"

import Trending from "../Component/Trending/Trending"

class Home extends Component {
  state = {
    movies: null,
  }

  componentDidMount() {
    fetchMoviesTrendingApi()
      .then((response) => this.setState({ movies: [...response.data.results] }))
      .catch((error) => console.log(error))
  }
  render() {
    return <> {this.state.movies && <Trending movies={this.state.movies} />}</>
  }
}

export default Home
