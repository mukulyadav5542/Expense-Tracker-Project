import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();

  const forgotPasswordHandler = (e) => {
    forgot();
  };

  const forgot = async () => {
    const resp = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAaDfIQlEPsBrQlUZpS0stYoPA8IVy7mA4",
      {
        method: "POST",
        body: JSON.stringify({
          requesType: "PASSWORD_RESET",
          email: emailRef.current.value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <div>
        <input
          className="text-white"
          ref={emailRef}
          type="email"
          placeholder="Email"
        />
      </div>
      <Link to={"/login"}>
        <div>
          <button onClick={forgotPasswordHandler}>Send</button>
        </div>
      </Link>
    </div>
  );
};

export default ForgotPassword;
