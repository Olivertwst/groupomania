// import logo from './assets/logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Profile from './pages/Profile.jsx';

const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem('auth') || '{"token": false}');

  return auth.token ? <Outlet /> : <Navigate to="login" />;
};

const App = () => {
  return (
    <>
      <Banner />
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;