import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DriverPage from "./pages/DriverPage"
import NavBar from "./components/NavBar/NavBar.js"

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <LoginPage />
          </Route>
          <Route exact path={["/home"]}>
            <HomePage />
          </Route>
          <Route exact path={["/driver"]}>
            <DriverPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
