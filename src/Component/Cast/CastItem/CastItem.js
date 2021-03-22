import React from "react"

const CastItem = (props) => {
  // console.log(props.profile_path)
  return (
    <li>
      {props.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w200/${props.profile_path}`} alt="" /> : <img src={`https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} width={200} alt="" />}

      <p>{props.name}</p>
      <p>Character: {props.character}</p>
    </li>
  )
}

export default CastItem
