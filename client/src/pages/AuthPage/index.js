import React from "react";

function AuthPage() {
  function handleClick(e) {
    console.log("login");
  }
  
  return(
    <div>
      <input
        type="email"
        id="username"
      />
      <input
        type="password"
        id="password"
      />
      <button
        type="submit"
        className="button"
        onClick={handleClick}
      >Login</button>
    </div>
  );
}

export default AuthPage;
