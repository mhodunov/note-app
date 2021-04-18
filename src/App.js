import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Navigation from "./components/Navigation.js";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <div className="container pt-4">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} component={About}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
