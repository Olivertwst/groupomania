import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Profile from './pages/Profile.jsx';


// TODO DECLARE AND EXPORT A FUNCTION CALLED "isLoggedIn" AND WILL RETURN A TRUE/FALSE IF THE USESRS TOKEN IS IN LOCAL STORAGE
export function isLoggedIn() {
  const auth = JSON.parse(localStorage.getItem('auth') || '{"token": false}');
  return !!auth.token;

}

const PrivateRoutes = () => {
  return (isLoggedIn() ? <Outlet /> : <Navigate to="login" />);
}


const App = () => {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route element={<PrivateRoutes />}>
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
