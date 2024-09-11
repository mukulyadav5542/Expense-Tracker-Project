import React, { useContext } from "react";
import Authentication from "./Authentication";
import { Link } from "react-router-dom";

const Logout = () => {
  const ctx = useContext(Authentication);

  const logOutHandler = (e) => {
    ctx.onLogout();
  };

  return (
    <div>
      <Link to={"/login"}>
        <button
          onClick={logOutHandler}
          className="text-2xl font-bold bg-red-600 p-2 b rounded-xl"
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Logout;
