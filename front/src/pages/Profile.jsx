import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

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
        <div className='deleteUser'>
            <h2>Delete</h2>
            <div>
                <button onClick={handleSubmit}>Delete Profile</button>
            </div>
        </div>
        // <div>Welcome to your profile...</div>;
    );
}
// TODO ADD A BUTTON FOR THE USER TO DELETE THEIR ACCT

// TODO NAV USER TO SIGN UP PAGE
export default Profile;