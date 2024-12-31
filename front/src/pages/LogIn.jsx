import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Banner from "../components/Banner"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        // Handle validations
        axios
            .post("http://localhost:3000/api/auth/login", { email, password })
            .then(response => {
                // Handle response
                localStorage.setItem('auth', JSON.stringify(response.data));
                console.log('navigating');
                navigate('/');
            }).catch(error => {
                setErrorMessage('Invalid Username and/or Password')
            });
    }

    return (
        <>
            <Banner />
            <div>
                {errorMessage && (
                    <p className="error"> {errorMessage} </p>
                )}
                <form action="" id="login" method="post" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="item">
                        <label htmlFor="email"> Email </label>
                        <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                    </p>
                    <p className="item">
                        <label htmlFor="password"> Password </label>
                        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                    </p>
                    <p className="item">
                        <input type="submit" value="Login" />
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;