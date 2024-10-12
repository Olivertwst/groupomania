import logo from '../assets/icon-left-font.png';
import '../components/Banner.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import { isLoggedIn } from '../App';


function Banner() {
    const navigate = useNavigate();
    const [nav, navBar] = useState()

    function handleLogout() {
        localStorage.removeItem('auth');
        // navigate('/login');
    };

    // {unreadMessages.length > 0 &&
    //     <h2>
    //       You have {unreadMessages.length} unread messages.
    //     </h2>
    //   } 
// TODO FINISH CONDITIONAL RENDERING LINKS BELOW  
    return (
        <header>
            <nav>
                <Link to="/">Home</Link >
                {!isLoggedIn() && <Link to="/signup">Signup</Link>}
                <Link to="/login">LogIn</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
                {/* <i className="fa-solid fa-bars"></i> */}
            </nav>
            <img src={logo} alt="logo" className="banner-image" />
        </header>
    )
}

export default Banner;