import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Movies">Movies</NavLink>
      </li>
    </ul>
  )
}

export default Navigation
