import React, {useState} from "react"
import "./verifyUser.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const VerifyUser = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const forgotpass = () => {
        console.log(user);
        axios.post("http://localhost:4545/user/verifyEmail", user)
        .then(res => {
            localStorage.setItem('verifyEmail',user.email)
           
            alert(res.data.message)
            if(res.data.status === "Success"){
             localStorage.setItem('otp',res.data.otp)
                console.log("userDetails", res.data.otp);
                history.push("/verifyOtp")
            }
           
        })
    }

    return (
        <div className="login">
            <h1>Verify Email</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <div className="button" onClick={forgotpass}>Send OTP</div>
        </div>
    )
}

export default VerifyUser