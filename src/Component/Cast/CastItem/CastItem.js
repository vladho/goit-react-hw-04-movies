import React from "react"

const CastItem = (props) => {
  console.log(props.profile_path)
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200/${props.profile_path}`} />
      <p>{props.name}</p>
      <p>Character: {props.character}</p>
    </li>
  )
}

export default CastItem
