import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Navigation.module.css"

const Navigation = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink exact to="/" className={style.link} activeClassName={style.active}>
          Home
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/Movies" className={style.link} activeClassName={style.active}>
          Movies
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation
