import logo from '../assets/icon-left-font.png';
import '../components/Banner.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
// import { useState } from "react"


function Banner() {
    const navigate = useNavigate();
    function handleLogout() {
        // TODO clear out user info from localstorage
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        // TODO  redirect to login
        console.log('Link clicked!');
    };

    navigate('/login');

    return (
        <header>
            <nav>
            {/* <nav className={`${components.banner}`}> */}
                <Link to="/">Home</Link >
                <Link to="/signup">Signup</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
                {/* <i className="fa-solid fa-bars"></i> */}
            </nav>
            <img src={logo} alt="logo" className="banner-image" />
        </header>
    )
}
// TODO ADD LOGO AND NAVIGTION MENU
// USE react router to allow users to click menu links and to go to other pages.  

export default Banner;