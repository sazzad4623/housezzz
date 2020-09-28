import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Contact from "./components/contact";
import About from "./components/about";
import Property from "./components/property";
import Propertydet from "./components/propertydet";
import Blog from "./components/blog";

const AppRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/property" exact component={Property}></Route>
        <Route path="/propertydetails" exact component={Propertydet}></Route>
        <Route path="/blog" exact component={Blog}></Route>
      </Switch>
    </div>
  );
};

export default AppRoute;
