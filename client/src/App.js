// APP
// react
import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage";
import DriverPage from "./pages/DriverPage";
import CustomerPage from "./pages/CustomerPage";
// component
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
