import React, { useState } from "react";

const Authentication = React.createContext({
  isLoggedIn: "",
  onLogin: () => {},
});

export const AuthenticationProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(token);

  const logInHandler = (token1) => {
    setIsLoggedIn(true);
    setToken(token1);
    localStorage.setItem("token", token);
  };


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
