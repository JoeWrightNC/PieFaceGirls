import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "./brandStyles/styles/main.css"
import "./brandStyles/styles/vendor/bootstrap.css"
import "./brandStyles/styles/vendor/font-awesome.min.css"
import "./brandStyles/styles/vendor/superslides.css"
//import "./brandStyles/styles/vendor/owl.carousel.css"
import "./brandStyles/styles/vendor/owl.transitions.css"
import "./brandStyles/styles/vendor/flickity.min.css"
//import "./brandStyles/styles/vendor/swipebox.min.css"
import "./brandStyles/styles/vendor/TimeCircles.css"

import Home from "./pages/Home"
import Bio from "./pages/Bio"
import Blog from "./pages/Blog"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
