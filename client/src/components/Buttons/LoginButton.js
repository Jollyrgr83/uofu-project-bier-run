// LOGINBUTTON COMPONENT
// react
import React from "react";
// authentication
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ classNameInput, buttonTextInput }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className={classNameInput} onClick={() => loginWithRedirect()}>
      {buttonTextInput}
    </button>
  );
};

export default LoginButton;
