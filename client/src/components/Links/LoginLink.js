// LOGINLINK COMPONENT
// react
import React from "react";
// authentication
import { useAuth0 } from "@auth0/auth0-react";

const LoginLink = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <a href="/" className="nav-link" onClick={() => loginWithRedirect()}>
      Log In
    </a>
  );
};

export default LoginLink;
