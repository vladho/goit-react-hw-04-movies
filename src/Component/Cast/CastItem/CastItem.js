import React from "react"
import style from "./CastItem.module.css"

const CastItem = (props) => {
  // console.log(props.profile_path)
  return (
    <li className={style.item}>
      {props.profile_path ? <img src={`https://image.tmdb.org/t/p/w200/${props.profile_path}`} width={200} height={300} alt="" /> : <img src={`https://hope.be/wp-content/uploads/2015/05/no-user-image.gif`} width={200} height={300} alt="" />}
      <p>{props.name}</p>
      <p>Character: {props.character}</p>
    </li>
  )
}

export default CastItem
