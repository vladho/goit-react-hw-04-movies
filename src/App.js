import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { appRoutes } from "./routes/appRoutes";
import "./App.css";
import AppBar from "./Component/AppBar/AppBar";

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          {appRoutes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
