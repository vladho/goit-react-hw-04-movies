import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

import "./App.css";
import AppBar from "./Component/AppBar/AppBar";

const Home = lazy(() => import("./pages/Home" /* webpackChunkName: "home" */));
const Movies = lazy(() =>
  import("./pages/Movies" /* webpackChunkName: "movies" */)
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage" /* webpackChunkName: "not-found-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.movies} component={Movies} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
