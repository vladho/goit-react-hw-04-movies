import React from "react";
import style from "./MoviePrewiev.module.css";

const MoviePrewiev = ({ poster_path, title }) => {
  return (
    <div className={style.block}>
      <div className={style.image}>
        <img
          className={style.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : `https://lh3.googleusercontent.com/proxy/SOly_liXo7aK548mDvHO7v1FKkUcDqyFj0Q8NVAMxSpxGzVayDjr9IaEQSyiYFYgTPkV1wRFsu9LvPuCGs-Mkk50CssrW0_qtKwxoMmKlrq8BrKtlGahWDzbFg_z2fyrOng`
          }
          // src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=" "
        />
      </div>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default MoviePrewiev;
