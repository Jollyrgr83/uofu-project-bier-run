import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

const localURL = "http://localhost:3000/customer";
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
