import React, { useState } from "react";

const Authentication = React.createContext({
  isLoggedIn: "",
  onLogin: () => {},
  // onLogout: () => {},
});

export const AuthenticationProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(token);

  const logInHandler = (token1) => {
    setIsLoggedIn(true);
    setToken(token1);
    localStorage.setItem("token", token);
  };

  const logOutHandler = (e) => {
    setToken(null);
    setIsLoggedIn(null);
    localStorage.removeItem('token');
  };


  const ctx = {
    isLoggedIn: isLoggedIn,
    onLogin: logInHandler,
    onLogout: logOutHandler,
  };

  return (
    <Authentication.Provider value={ctx}>
      {props.children}
    </Authentication.Provider>
  );
};

export default Authentication;
