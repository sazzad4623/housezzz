import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Contact from "./components/contact";


const AppRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact}></Route>    
      </Switch>
    </div>
  );
};

export default AppRoute;