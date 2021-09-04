import React, {useState} from "react"
import "./verifyOTP.css"
import { useHistory } from "react-router-dom"

const VerifyUser = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        enteredOtp:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const verifyOTP = () => {
        let otp = localStorage.getItem('otp');
        console.log("otp",otp);
        console.log("enteredOtp",user.enteredOtp);
        if(otp === user.enteredOtp){
            alert("Otp verified")

            history.push("/resetpassword")
        }else{
            alert('wrong otp');

        }
    }

    return (
        <div className="login">
            <h1>Verify OTP</h1>
            <input type="text" name="otp" value={user.enteredOtp} onChange={handleChange} placeholder="Enter your OTP"></input>
            <div className="button" onClick={verifyOTP}>Verify OTP</div>
        </div>
    )
}

export default VerifyUser