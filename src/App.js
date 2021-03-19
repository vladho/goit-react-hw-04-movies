import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import NotFoundPage from "./pages/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import routes from "./routes"

import "./App.css"
import AppBar from "./Component/AppBar/AppBar"
function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.movies} component={Movies} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  )
}

export default App
