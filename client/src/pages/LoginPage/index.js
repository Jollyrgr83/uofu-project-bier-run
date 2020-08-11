import React from "react";

import LoginButton from "../../components/LoginButton";

import "./index.css";

function LoginPage() {
  return (
    <div>
      <div className="login-background text-center mx-auto">
        <div className="login-container text-center mx-auto">
          <input type="text" id="username" className="login-input" />
          <input type="password" id="password" className="login-input" />
          <button className="login-button" type="submit">Login</button>
        </div>
      </div>
      <div className="row">
        <LoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
