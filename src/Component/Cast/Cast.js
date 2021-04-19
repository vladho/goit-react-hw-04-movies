import React, { Component } from "react"
import { fetchMoviesCreditApi } from "../../services/movies-api"
import CastItem from "./CastItem/CastItem"
import { withRouter } from "react-router-dom"
import style from "./Cast.module.css"

class Cast extends Component {
  state = { cast: null }
  componentDidMount() {
    fetchMoviesCreditApi(this.props.moveiId)
      .then((responce) => this.setState({ cast: responce.data.cast }))
      .catch((error) => console.log(error))
  }
  render() {
    const cast = this.state.cast
    return <ul className={style.list}>{cast !== null && cast.map((el) => <CastItem {...el} key={el.id} />)}</ul>
  }
}

export default withRouter(Cast)
