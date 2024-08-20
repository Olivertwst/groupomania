import axios from "axios"
import { useState } from "react"

function Login() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        // Handle validations
        axios
            .post("http://localhost:3000/api/auth/login", { firstName, lastName, email, password })
            .then(response => {
                console.log(response)
                // Handle response
                // TODO store user info in localstorage
                // TODO redirect user to homepage
                
            })
            // TODO ADD CATCH FOR ERRORS AND DISPLAY MESSAGE FOR USER. "IF ERROR (User name and/or password incorrect )"
    }

    return (
        <div>
            <form action="" id="login" method="post" onSubmit={handleSubmit}>
                <h1>Login</h1>
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
                    <input type="submit" value="Login" />
                </p>
            </form>
        </div>
    )
}

export default Login;