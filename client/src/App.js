// APP
// react
import React, { useState } from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage";
import DriverPage from "./pages/DriverPage";
import CustomerPage from "./pages/CustomerPage";
// component
import Nav from "./components/Nav"

function App() {
  // used to handle page navigation
  const [activePage, setActivePage] = useState("home");
  // handles page navigation
  function selectPage(event) {
    setActivePage(event.target.id);
  }

  function loadPage() {
    if (activePage === "customer") {
      return (
        <CustomerPage />
      );
    } else if (activePage === "driver") {
      return (
        <DriverPage />);
    } else {
      return (
        <HomePage />
        );
    }
  }

  return (
    <Router>
      <div>
        <Nav handleNav={selectPage} />
        <Switch>
          <Route exact path={["/"]}>
            <HomePage />
          </Route>
          <Route exact path={["/index"]}>
            {loadPage()}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
