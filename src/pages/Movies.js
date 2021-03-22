import React, { Component } from "react"
import MovieList from "../Component/MovieList/MovieList"
import { fetchMoviesSearchApi } from "../services/movies-api"

class Movies extends Component {
  state = {
    query: "",
    // movies: null,
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.setState(query)
    // console.log(this.state.query);
    // fetchMoviesSearchApi(this.state.query).then((responce) => this.setState({ movies: [...responce.data.results] }))
    this.state.query && this.props.history.push({ search: `query=${this.state.query}` })
    // this.state.query && this.props.history.push({ search: this.state.query })
    // console.log(this.state);
    // const search = this.props.location.search.slice(7)

    // fetchMoviesSearchApi(search).then((responce) => this.setState({ movies: [...responce.data.results] }))
  }

  // componentDidUpdate() {
  //   // console.log(this.props.location.search.split("").splice(0, 7))
  //   // console.log(this.props.location.search.slice(7))
  //   const search = this.props.location.search.slice(7)
  //   fetchMoviesSearchApi(search).then((responce) => this.setState({ movies: [...responce.data.results] }))
  // }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.location.search)
    // console.log(this.props.location.search)

    // const search = this.props.location.search.slice(7)
    // console.log(prevState.query)
    // console.log(this.state.query)

    if (prevProps.location.search !== this.props.location.search) {
      // if (this.state.query !== this.props.location.search) {
      // const search = this.props.location.search.slice(7)
      // // console.log(search)
      // fetchMoviesSearchApi(search).then((responce) => this.setState({ movies: [...responce.data.results] }))
      this.fetchSearchApi()
    }
  }

  componentDidMount() {
    if (this.props.location.search.length > 0) {
      this.fetchSearchApi()
    }
    // console.log(this.props.location.search)
    // if (this.props.location.search.length > 0) {
    // const search = this.props.location.search.slice(7)
    // fetchMoviesSearchApi(search).then((responce) => this.setState({ movies: [...responce.data.results] }))
    // console.log(this.props.location.search)
    // }
  }

  fetchSearchApi = () => {
    const search = this.props.location.search.slice(7)
    fetchMoviesSearchApi(search).then((responce) => this.setState({ movies: [...responce.data.results] }))
  }
  render() {
    // console.log(this.props.location.search)
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.query} />
          <button type="submit"> Search</button>
        </form>
        {this.state.movies !== undefined && <MovieList movies={this.state.movies} search={this.state.query} />}
        {/* {<MovieList movies={this.state.movies} />} */}
      </>
    )
  }
}

export default Movies
