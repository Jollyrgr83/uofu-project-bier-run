import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DriverPage from "./pages/DriverPage";
import CustomerPage from "./pages/CustomerPage";
import NavBar from "./components/NavBar/NavBar.js";
import NewNav from "./components/NewNav/NewNav.js"

import Nav from "./components/Nav";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <div>
        {/* <NewNav /> */}
        <Switch>
          <Route exact path={["/"]}>
            <HomePage />
          </Route>
          <Route exact path={["/auth/login"]}>
            <AuthPage/>
          </Route>
          <Route exact path={["/home"]}>
            <LoginPage />
          </Route>
          <Route exact path={["/driver"]}>
            <DriverPage />
          </Route>
          <Route exact path={["/customer"]}>
            <CustomerPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
