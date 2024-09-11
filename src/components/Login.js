import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";

const Login = () => {
  const ctx = useContext(Authentication);
  console.log(ctx);

  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [isLoading, setIsLoading] = useState();

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const logInHandler = (e) => {
    setIsLoading("Logging You in.....");

    loginApi();
  };

  const loginApi = async () => {
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaDfIQlEPsBrQlUZpS0stYoPA8IVy7mA4",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await resp.json();

      if (resp.ok) {
        console.log(data);
        console.log(resp);
        console.log("Login Successfull");
        setIsLoading(null);
      } else {
        setIsLoading(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500m-auto mt-[15re] w-screen bg-green-400 flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col bg-slate-900-800  border rounded-lg border-gray-500 shadow-2xl gap-5 p-[10rem] ">
        <div className="text-center font-bold text-2xl text-red-200 ">
          Log In
        </div>
        <div className=" w-[20rem] ">
          <input
            className="p-4 w-full  text-black shadow-2xl rounded-lg "
            onChange={emailHandler}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className=" w-[20rem] ">
          <input
            className="p-4 w-full  text-black shadow-2xl rounded-lg "
            onChange={passwordHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          {isLoading && (
            <div className="text-white font-bold  text-center text-xl">
              {isLoading}
            </div>
          )}
        </div>
        <div className=" text-center">
          <button
            onClick={logInHandler}
            className="relative bg-gradient-to-r hover:animate-none from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full w-full shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-pulse  "
          >
            Log In
          </button>
          <Link to={"/forgot"}>
            <button className="bg-red-600 p-3 rounded-xl mt-4 text-white">
              Forgot Password
            </button>
          </Link>
        </div>
      </div>
      <div>
        <button className="bg-green-400 p-4 relative hover:animate-none animate-pulse bg-gradient-to-r from-yellow-400 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-110 hover:bg-green-900 hover:text-white  ">
          <Link to={"/"}>Dont't Have an account? SignUp</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
