import { useContext, useEffect } from "react";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import Authentication from "./components/Authentication";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const ctx = useContext(Authentication);

  const navigate = useNavigate();

  console.log(ctx.isLoggedIn);

  useEffect(() => {
    if (ctx.isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [ctx.isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route index element={<SignUp />}></Route>
        {!ctx.isLoggedIn && <Route path="/login" element={<Login />}></Route>}
        {ctx.isLoggedIn && <Route path="/home" element={<Home />}></Route>}
        <Route path="/userProfile" element={<UserProfile />}></Route>
        <Route path="/forgot" element={<ForgotPassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
