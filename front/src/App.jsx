import React, { useState } from "react";
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Post  from "./pages/Post";
import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import './styles/App.css';

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
