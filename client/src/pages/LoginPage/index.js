import React from "react";

import "./index.css";

function LoginPage() {
  return (
    <div className="login-background text-center mx-auto">
      <div className="login-container text-center mx-auto">
        <input type="text" id="username" className="login-input" />
        <input type="password" id="password" className="login-input" />
        <button className="login-button" type="submit">Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
