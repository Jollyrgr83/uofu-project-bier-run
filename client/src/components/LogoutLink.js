import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutLink = () => {
  const { logout } = useAuth0();

  function clearSession() {
    sessionStorage.clear();
  }

  return (
    <a href="/" className="nav-link" onClick={() => clearSession}>
      Log Out
    </a>
  );
};

export default LogoutLink;
