import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Profile from './pages/Profile.jsx';
import { useEffect } from 'react';
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

// export function isLoggedIn() {
//   // FIXME use react hook for localStorage so when user logs out routes are still private

//   // const auth = JSON.parse(localStorage.getItem('auth') || '{"token": false}');
//   console.log(JSON.stringify(auth))
//   return auth.token;
// }

// const [logout, setLogout] = useState(() => {
//   // getting stored value
//   const saved = localStorage.getItem("auth");
//   const initialValue = JSON.parse(saved);
//   return initialValue || "";
// });
const PrivateRoutes = () => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      return JSON.parse(storedAuth);
    }
    return '{"token": false}';
  });
  // const token =(localStorage.getItem('token')) || false;
  return (auth.token ? <Outlet /> : <Navigate to="login" />);
}


const App = () => {
  // TODO ADD ROUTE FOR POST DETAILS PAGE 
  return (
    <Router>
      <Banner />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="posts/:id" element={<Post />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
