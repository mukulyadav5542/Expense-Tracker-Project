import { useContext, useEffect } from "react";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import Authentication from "./components/Authentication";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const ctx = useContext(Authentication);

  const navigate = useNavigate();

  console.log(ctx.isLoggedIn);

  useEffect(() => {
    if (ctx.isLoggedIn) {
      navigate("/home");
    } else {
      // navigate('/login')
    }
  }, [ctx.isLoggedIn, navigate]);

  return (
    <div>
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
