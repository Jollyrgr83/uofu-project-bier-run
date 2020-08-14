import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutLink = () => {
  const { logout } = useAuth0();

  return (
    <a href="/" className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </a>
  );
};

export default LogoutLink;
