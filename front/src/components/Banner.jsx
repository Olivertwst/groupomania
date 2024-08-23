import logo from '../assets/icon-left-font.png';
import './Banner.css';
import { Link } from "react-router-dom";


function Banner() {
    function handleClick() {
        console.log('Link clicked!');
    }
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleClick}>Logout</Link>
                {/* <i className="fa-solid fa-bars"></i> */}
            </nav>
            <img src={logo} alt="logo" className="banner-image" />
        </header>
    )
}
// TODO ADD LOGO AND NAVIGTION MENU
// USE react router to allow users to click menu links and to go to other pages.  

export default Banner;