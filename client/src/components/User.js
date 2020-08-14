import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log("user", user);
  console.log("isAuthenticated", isAuthenticated);
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default User; 