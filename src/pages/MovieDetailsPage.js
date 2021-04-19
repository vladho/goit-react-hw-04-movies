import React, { Component } from "react"
// import { Route } from "react-router"
// import { NavLink } from "react-router-dom"
// import Cast from "../Component/Cast/Cast"
// import Reviews from "../Component/Reviews/Reviews"
import { fetchMoviesDetailsApi } from "../services/movies-api"
// import style from "./MovieDetailsPage.module.css"
import { pathName } from "../routes/appRoutes"
import MovieDetailsPageInfo from "../Component/MovieDetailsPageInfo/MovieDetailsPageInfo"

class MovieDetailsPage extends Component {
  state = {
    movie: {
      title: "",
      vote_average: null,
      genres: [],
      poster_path: "",
    },
  }
  handleGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || pathName.home)
  }

  componentDidMount() {
    const moveiId = this.props.match.params
    fetchMoviesDetailsApi(moveiId).then((response) => this.setState({ movie: response.data }))
  }
  render() {
    const movie = this.state.movie
    const { path, url } = this.props.match
    const popularity = Number(movie.vote_average * 10)
    const genres = movie.genres.map((el) => el.name + " ")
    return (
      <>
        <MovieDetailsPageInfo {...this.props} movie={movie} path={path} url={url} popularity={popularity} genres={genres} handleGoBack={this.handleGoBack} />
      </>
    )
  }
}

export default MovieDetailsPage
