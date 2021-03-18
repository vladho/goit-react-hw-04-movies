import React from "react"

const ReviewsItem = (props) => {
  console.log(props)
  return (
    <li>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </li>
  )
}

export default ReviewsItem
