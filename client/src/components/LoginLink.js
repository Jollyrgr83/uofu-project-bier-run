import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLink = () => {
  const { loginWithRedirect } = useAuth0();

  return <a href="/" className="nav-link" onClick={() => loginWithRedirect()}>Log In</a>;
};

export default LoginLink;
