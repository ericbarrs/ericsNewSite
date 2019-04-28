import React, { Component } from "react";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Burger from "./routes/burgerBuilder/burgerBuilder";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/burgerbuilder" component={Burger} />
        </div>
      </Router>
    );
  }
}

export default App;
