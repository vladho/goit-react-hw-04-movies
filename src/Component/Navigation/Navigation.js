import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Navigation.module.css"
const Navigation = () => {
  return (
    <ul className={style.list}>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/Movies">Movies</NavLink>
      </li>
    </ul>
  )
}

export default Navigation
