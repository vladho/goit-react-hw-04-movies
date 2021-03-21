// export default () => {
//   return (
//     <form onSubmit={}>
//       <input />
//       <button type="submit"> Search</button>
//     </form>
//   )
// }
import React, { Component } from "react"

class Movies extends Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.setState(query)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.query} />
        <button type="submit"> Search</button>
      </form>
    )
  }
}

export default Movies
