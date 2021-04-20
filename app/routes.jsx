import React from "react";
import {Route, IndexRoute, browserHistory} from "react-router";
import {Builder} from "@datawheel/canon-cms";

import App from "./App";
import Home from "./pages/Home";

function createRoute() {
  return (
    <Route path="/" component={App} history={browserHistory}>
      <IndexRoute component={Home} />
      <Route path="/cms" component={Builder} />
    </Route>
  );
}

export default createRoute;
