import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Profile() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
        const auth = JSON.parse(localStorage.getItem('auth'));
        const config = {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        };
        // Handle validations

        axios
            .delete(`http://localhost:3000/api/auth/users/${auth.userId}`, config)
            .then(response => {
                // Handle response
                localStorage.clear();
                navigate('/signup');
            }).catch(error => {
                setErrorMessage('Invalid Username and/or Password')
            });
    }

    return (
        <>
            <Banner />
            <div className='deleteUser'>
                <div>
                    <button onClick={handleSubmit}>Delete Profile</button>
                </div>
            </div>
            {/* <div>Welcome to your profile...</div>; */}
        </>
    );
}
export default Profile;