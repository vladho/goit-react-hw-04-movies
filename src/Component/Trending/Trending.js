import React from "react"
import { Link } from "react-router-dom"

const Trending = ({ el }) => {
  console.log(el.title)
  return (
    <li>
      <Link to={`/Movies/${el.id}`}>{el.title} </Link>
    </li>
  )
}

export default Trending
