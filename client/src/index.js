// INDEX
// react
import React from "react";
import ReactDOM from "react-dom";
// stylesheet
import "./index.css";
// APP
import App from "./App.js";
// serviceworker
import * as serviceWorker from "./serviceWorker";
// authentication
import { Auth0Provider } from "@auth0/auth0-react";
// urls for local development/testing and heroku deployment
// const localURL = "http://localhost:3000/customer";
const herokuURL = "https://bier-run.herokuapp.com/customer";

ReactDOM.render(
  <Auth0Provider
    domain="dev-w193otkg.us.auth0.com"
    clientId="XtMtHNFaHul68C8mV9F2ozyrdaCOpw7x"
    redirectUri={herokuURL}
    audience="https://dev-w193otkg.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
