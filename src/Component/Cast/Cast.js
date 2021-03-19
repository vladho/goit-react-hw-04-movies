import React, { Component } from "react"
import { fetchMoviesCreditApi } from "../../services/movies-api"
import CastItem from "./CastItem/CastItem"

class Cast extends Component {
  state = { cast: null }
  componentDidMount() {
    fetchMoviesCreditApi(this.props.moveiId).then((responce) => this.setState({ cast: responce.data.cast }))
  }
  render() {
    const cast = this.state.cast
    // console.log(cast)
    return <ul>{cast !== null && cast.map((el) => <CastItem {...el} />)}</ul>
  }
}

export default Cast
