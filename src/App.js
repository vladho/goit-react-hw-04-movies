import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

import "./App.css";
function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        {/* <Route path="/movies/:" component={Movies} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies" component={Movies} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
