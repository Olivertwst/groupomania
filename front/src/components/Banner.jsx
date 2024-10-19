import logo from '../assets/icon-left-font.png';
import '../components/Banner.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import Login from '../pages/LogIn';


function Banner() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            return JSON.parse(storedAuth);
        }
        return '{"token": false}';
    });

    function handleLogout() {
        localStorage.removeItem('auth');
        console.log('loggingOut')
        //FIXME NAVIGATE NOT WORKING
        navigate('/');
    };

    return (
        <header>
            <nav>
                {auth && <Link to="/">Home</Link >}
                {!auth && <Link to="/signup">Signup</Link>}
                {!auth && <Link to="/login">LogIn</Link>}
                {auth && <Link to="/profile">Profile</Link>}
                {auth && <Link to="/" onClick={handleLogout}>Logout</Link>}
            </nav>
            <img src={logo} alt="logo" className="banner-image" />
        </header>
    )
}

export default Banner;