import React, { Component } from "react"

import MoviesSearch from "../Component/MoviesSearch/MoviesSearch"
import { fetchMoviesSearchApi } from "../services/movies-api"

class MoviesPage extends Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state.query && this.props.history.push({ search: `query=${this.state.query}` })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchSearchApi()
    }
  }

  componentDidMount() {
    if (this.props.location.search.length > 0) {
      this.fetchSearchApi()
    }
  }

  fetchSearchApi = () => {
    const search = this.props.location.search.slice(7)
    fetchMoviesSearchApi(search).then((responce) => this.setState({ movies: [...responce.data.results] }))
  }
  render() {
    return (
      <>
        <MoviesSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} movies={this.state.movies} value={this.state.query} />
      </>
    )
    // return <>{this.state.movies !== undefined && <MovieList handleSubmit={this.handleSubmit} handleChange={this.handleChange} movies={this.state.movies} value={this.state.query} />}</>
  }
}

export default MoviesPage
