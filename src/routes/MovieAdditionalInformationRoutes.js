import { lazy } from "react";

export const Cast = lazy(() =>
  import("../Component/Cast/Cast" /* webpackChunkName: "cast" */)
);
export const Reviews = lazy(() =>
  import("../Component/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);
