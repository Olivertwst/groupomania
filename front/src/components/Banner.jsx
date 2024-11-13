import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/icon-left-font.png';
import '../components/Banner.css';


function Banner() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            console.log(JSON.parse(storedAuth))
            return JSON.parse(storedAuth);
        }
        return { "token": false };
    });
    useEffect(() => {
        if (auth === undefined) return;
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth, 'auth']);

    function handleLogout() {
        localStorage.removeItem('auth');
        console.log('loggingOut')
        //FIXME NAVIGATE NOT WORKING
        // localStorage.clear();
        navigate('LogIn');
    };
    // FIXME conditional rendering link (logout)
    return (
        <header>
            <nav>
                {auth && <Link to="/">Home</Link >}
                {!auth && <Link to="/signup">Signup</Link>}
                {!auth && <Link to="/login">LogIn</Link>}
                {auth && <Link to="/profile">Profile</Link>}
                {auth.token && <Link to="/" onClick={handleLogout}>Logout</Link>}
            </nav>
            <img src={logo} alt="logo" className="banner-image" />
        </header>
    )
}

export default Banner;