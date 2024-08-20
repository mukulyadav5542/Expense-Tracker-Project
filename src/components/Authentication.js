import React, { useState } from "react";

const Authentication = React.createContext({
  isLoggedIn: "",
  onLogin: () => {},
});

export const AuthenticationProvider = (props) => {
  localStorage.getItem("token");
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(token);

  const logInHandler = (token1) => {
    setIsLoggedIn(true);
    setToken(token1);
  };

  localStorage.setItem("token", token);

  const ctx = {
    isLoggedIn: isLoggedIn,
    onLogin: logInHandler,
  };

  return (
    <Authentication.Provider value={ctx}>
      {props.children}
    </Authentication.Provider>
  );
};

export default Authentication;
