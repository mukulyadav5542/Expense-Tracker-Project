import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Home = () => {
  const token = localStorage.getItem("token");

  const [verificationError, setVerificationError] = useState(null);

  const emailVerificationHandler = (e) => {
    emailVerificationApi();
  };

  const emailVerificationApi = async () => {
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAaDfIQlEPsBrQlUZpS0stYoPA8IVy7mA4",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = await resp.json();

      if (resp.ok) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Logout />
      <div className="flex justify-around  items-center">
        <div className="text-[5rem]">Welcome To Expense Tracker</div>
        <div>
          Your Profile is Incomplete.{" "}
          <Link to="/userProfile">
            <button className="border bg-green-500 p-1 rounded-lg">
              Complete Now
            </button>
          </Link>
        </div>
        <button
          onClick={emailVerificationHandler}
          className="border bg-yellow-500 p-1 rounded-lg"
        >
          Click here to verify your EMAIL-ID
        </button>
      </div>
    </div>
  );
};

export default Home;
