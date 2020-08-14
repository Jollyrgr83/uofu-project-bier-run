import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import DriverPage from "./pages/DriverPage";
import CustomerPage from "./pages/CustomerPage";
import User from "./components/User";
import NewNav from "./components/NewNav/NewNav.js"


// import NavBar from "./components/NavBar/NavBar.js";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <NewNav />
        <Switch>
          <Route exact path={["/"]}>
            <HomePage />
          </Route>
          <Route exact path={["/driver"]}>
            <DriverPage />
          </Route>
          <Route exact path={["/customer"]}>
            <CustomerPage />
          </Route>
          <Route exact path={["/features"]}>
            <HomePage />
          </Route>
          <Route exact path={["/pricing"]}>
            <HomePage />
          </Route>
          <Route exact path={["/auth"]}>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
