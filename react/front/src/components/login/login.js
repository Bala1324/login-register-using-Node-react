import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ updateUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        console.log(user);
        axios.post("http://localhost:4545/user/login", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            console.log("userDetails", res.data.user);
            history.push("/cart")
        })
    }

    return (


        
        <html lang="en">
        
        <head>
            <meta charset="UTF-8"/>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            <meta name="google-signin-client_id"
                content="133114701703-89enko3teismjk71adb8sco1brklerp9.apps.googleusercontent.com"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Login</title>
        </head>
        
        <body>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <a href="#" onclick="signOut();">Sign out</a>
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
            <p className= "forgotxt" onClick={() =>history.push("/verifyUser")}>forgot password?</p>


        </div>
        </body>
        
        </html>
    )
}

export default Login