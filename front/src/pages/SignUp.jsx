// import '../styles/Signup.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        // After successful signup:
        // setSignedUp(true);

        // Handle validations
        axios
            .post("http://localhost:3000/api/auth/signup", { firstName, lastName, email, password })
            .then(response => {
                console.log(response)
                // Handle response
                navigate('/login'); // Redirect to login page
            })
            .catch(error => {
                setErrorMessage('ERROR UNABLE TO LOGIN')
            });
    }

    return (
        <div>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <form action="" id="signup" method="post" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <p className="item">
                    <label for="first-name"> First Name </label>
                    <input type="text" name="firstName" id="first-name" onChange={e => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p className="item">
                    <label for="last-name"> Last Name</label>
                    <input type="text" name="lastName" id="last-name" onChange={e => setLastName(e.target.value)} value={lastName} />
                </p>
                <p className="item">
                    <label for="email"> Email </label>
                    <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                </p>
                <p className="item">
                    <label for="password"> Password </label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                </p>
                <p className="item">
                    <input type="submit" value="Signup" />
                </p>
            </form>
        </div>
    )
}

export default Signup;