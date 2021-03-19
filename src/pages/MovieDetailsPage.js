import React, { Component } from "react"
import { Route } from "react-router"
import { Link, NavLink } from "react-router-dom"
import Cast from "../Component/Cast/Cast"
import Reviews from "../Component/Reviews/Reviews"
import { fetchMoviesDetailsApi, fetchMoviesImageApi } from "../services/movies-api"
import style from "./MovieDetailsPage.module.css"

class MovieDetailsPage extends Component {
  state = {
    image: {
      title: "dfsf",
      vote_average: 1,
      genres: [1, 2],
    },
  }

  componentDidMount() {
    const moveiId = this.props.match.params
    // console.log(moveiId);
    // console.log(this.props.match.params);
    // const tezt = { moveiId };
    // fetchMoviesDetailsApi(moveiId).then((response) => console.log(response));
    fetchMoviesDetailsApi(moveiId).then((response) => this.setState({ image: response.data }))
  }
  render() {
    const image = this.state.image
    // console.log(image.poster_path)
    // console.log(image)
    // console.log(this.props.match)
    const path = this.props.match.path
    const url = this.props.match.url
    const popularity = Number(image.vote_average * 10)
    const genres = image.genres.map((el) => el.name + " ")
    // console.log(genres)
    // console.log(this.state.image.map((el) => el.title));
    return (
      <>
        <div className={style.page}>
          <img src={`https://image.tmdb.org/t/p/w400/${image.poster_path}`} />
          <div className={style.views}>
            <h2>{image.title}</h2>
            <p>{`user score ${popularity}%`}</p>
            <h3>overview</h3>
            <p>{image.overview}</p>
            <h4>Genres</h4>
            <p>{genres}</p>
          </div>
        </div>
        <div>
          <p>additional informtion</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route path={`${path}/cast`} render={() => <Cast moveiId={this.props.match.params} />} />
          <Route path={`${path}/reviews`} render={() => <Reviews moveiId={this.props.match.params} />} />
        </div>
      </>
    )
  }
}

export default MovieDetailsPage
