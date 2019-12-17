import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import Header from "./common/Header";
import MobilesPage from "./mobiles/MobilesPage";
import ViewMobilePage from "./mobiles/ViewMobilePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/mobiles" component={MobilesPage}></Route>
        <Route path="/mobile/:id" component={ViewMobilePage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
