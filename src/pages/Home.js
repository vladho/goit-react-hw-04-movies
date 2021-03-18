// export default () => {
//   return <h2>Home</h2>
// }

import React, { Component } from "react"
import Trending from "../Component/Trending/Trending"
import fetchMoviesTrendingApi from "../services/movies-api"
import { Link } from "react-router-dom"

class Home extends Component {
  state = {
    movies: null,
  }

  // fetchMovies = () => {
  //   console.log(fetchMoviesTrendingApi().then((response) => console.log(response.data.results)))
  //   fetchMoviesTrendingApi().then((response) => this.setState({ movies: [...response.data.results] }))
  // }
  // componentDidMount() {
  //   if (this.state.movies === null) {
  //     this.fetchMovies()
  //   }
  // }

  componentDidMount() {
    // console.log(fetchMoviesTrendingApi().then((response) => console.log(response.data.results)))
    fetchMoviesTrendingApi().then((response) => this.setState({ movies: [...response.data.results] }))
  }
  render() {
    console.log(this.state)
    console.log(this.props.match.url)
    // this.fetchMovies()
    return (
      //   <h2 onClick={this.fetchMovies}>Home</h2>
      // <ul>{this.state.movies !== null && this.state.movies.map((el) => <Trending el={el} key={el.id} />)}</ul>
      <ul>
        {this.state.movies !== null &&
          this.state.movies.map((el) => (
            <li>
              <Link to={`/${this.props.match.url}/${el.id}`}>{el.title} </Link>
            </li>
          ))}
      </ul>
    )
  }
}

export default Home
