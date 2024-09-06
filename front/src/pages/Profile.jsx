import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, deleteUser } from "react";
// import { get } from "../../back/app";



function Profile() {

    const [auth, getAuth] = useState();
    const [user, authCurrentUser] = useState();
    const navigate = useNavigate();
    const [errorMessage, setError] = useState('')
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePicUrl, setProfilePicUrl] = useState(null); // Store the URL of the profile picture displayed in the UI
    const [profilePicFile, setProfilePicFile] = useState(null); // Stores selected image file when a user chooses to update their profile picture


    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
        const auth = localStorage.getItem('auth')

        // Handle validations
        
        axios
            .delete(`http://localhost:3000/api/auth/${auth.userId}`, {})
            .then(response => {
                // Handle response
                localStorage.clear();
                navigate('/signup');
            }).catch(error => {
                setError('Invalid Username and/or Password')
            });
    }
   
    return <div>Welcome to your profile...</div>;
}
// TODO ADD A BUTTON FOR THE USER TO DELETE THEIR ACCT

// TODO NAV USER TO SIGN UP PAGE
export default Profile;