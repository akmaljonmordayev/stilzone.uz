import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import About from "./pages/About/About"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register"
import Profile from "./pages/Profile/Profile"
import MainLayout from "./layouts/MainLayout/MainLayout";
function App() {
  return <>


    <Routes>
      <Route path="/" element={<MainLayout><Home/></MainLayout>}></Route>
      <Route path="*" element={<NotFound><NotFound/></NotFound>}></Route>
      <Route path="/signin" element={<Login/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>

  </>;
}

export default App;
