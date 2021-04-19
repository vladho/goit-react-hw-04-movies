import React from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { pathName } from "../../routes/appRoutes";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
import { Cast, Reviews } from "../../routes/MovieAdditionalInformationRoutes";
import style from "./MovieAdditionalInformation.module.css";

const MovieAdditionalInformation = ({ path, url, location, match }) => {
  return (
    <div>
      <p>additional informtion</p>
      <ul>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location?.state?.from || pathName.home,
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location?.state?.from || pathName.home,
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route
        path={`${path}/cast`}
        render={() => <Cast moveiId={match.params} />}
      />
      <Route
        path={`${path}/reviews`}
        render={() => <Reviews moveiId={match.params} />}
      />
    </div>
  );
};

export default MovieAdditionalInformation;
