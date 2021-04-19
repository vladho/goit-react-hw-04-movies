import { lazy } from "react";

export const pathName = {
  home: "/",
  movies: "/movies",
  moviesDetails: "/movies/:movieId",
};

export const appRoutes = [
  {
    name: "home",
    path: `${pathName.home}`,
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "home" */)
    ),
  },
  {
    name: "movies",
    path: `${pathName.movies}`,
    exact: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /* webpackChunkName: "movies" */)
    ),
  },
  {
    name: "movieDetailsPage",
    path: `${pathName.moviesDetails}`,
    exact: false,
    component: lazy(() =>
      import(
        "../pages/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */
      )
    ),
  },
  {
    name: "notFoundPage",
    path: "",
    exact: false,
    component: lazy(() =>
      import("../pages/NotFoundPage" /* webpackChunkName: "not-found-page" */)
    ),
  },
];
