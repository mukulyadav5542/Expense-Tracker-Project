import React, { useState } from "react";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordMatch, setPasswordMatch] = useState(null);

  const emailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(confirmPassword);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signUpHandler = (e) => {
    if (password !== confirmPassword) {
      setPasswordMatch(
        "Password does not match, Please re-enter your password"
      );

      setTimeout(() => {
        setPasswordMatch(false);
      }, 3000);
      return;
    }

    if (password.length <= 8) {
      setPasswordMatch("Minimum Password length should be equal to or more than 8");

      setTimeout(() => {
        setPasswordMatch(false);
      }, 3000);
      return;
    }

    signUpApi();
  };

  const signUpApi = async () => {
    try {
      const resp = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaDfIQlEPsBrQlUZpS0stYoPA8IVy7mA4`,
        {
          method: "POST",
          body: JSON.stringify({
            email: userEmail,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await resp.json();

      if (resp.ok) {
        console.log("User has successfully signed up");
      } else {
        setPasswordMatch(data.error.message);
        setTimeout(() => {
          setPasswordMatch(null);
        }, 3000);
      }
    } catch (error) {}
  };

  return (
    <div className="h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 m-auto mt-[15re] w-screen bg-green-400 flex flex-col gap-5 justify-center items-center">
      <div className=" animate__animated animate__backInRight animate__slow  flex flex-col bg-slate-900-800  border rounded-lg border-gray-500 shadow-2xl gap-5 p-[10rem] ">
        <div className="text-center font-bold text-2xl text-red-200 ">
          Sign UP
        </div>
        <div className=" w-[20rem] ">
          <input
            onChange={emailHandler}
            className="p-4 w-full  text-black shadow-2xl rounded-lg "
            type="text"
            placeholder="Email"
          />
        </div>
        <div className=" w-[20rem] ">
          <input
            onChange={passwordHandler}
            className="p-4 w-full text-black shadow-2xl rounded-lg "
            type="password"
            placeholder="Password"
          />
        </div>
        <div className=" w-[20rem] ">
          <input
            onChange={confirmPasswordHandler}
            className="p-4 w-full text-black  shadow-2xl rounded-lg "
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="font-bold font-serif text-center text-xl underline  text-white  italic">
          {passwordMatch && <span>{passwordMatch}</span>}
        </div>
        <div className=" text-center">
          <button
            onClick={signUpHandler}
            className="relative bg-gradient-to-r hover:animate-none from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full w-full shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-pulse  "
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="animate__animated animate__backInLeft animate__slow">
        <button className="bg-green-400 p-4 relative hover:animate-none animate-pulse bg-gradient-to-r from-yellow-400 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-110 hover:bg-green-900 hover:text-white  ">
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
