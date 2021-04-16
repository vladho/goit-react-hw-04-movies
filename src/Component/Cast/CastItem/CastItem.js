import React from "react";

const CastItem = (props) => {
  // console.log(props.profile_path)
  return (
    <li>
      {props.profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${props.profile_path}`}
          alt=""
        />
      ) : (
        <img
          src={`https://hope.be/wp-content/uploads/2015/05/no-user-image.gif`}
          width={200}
          height={300}
          alt=""
        />
      )}

      <p>{props.name}</p>
      <p>Character: {props.character}</p>
    </li>
  );
};

export default CastItem;
