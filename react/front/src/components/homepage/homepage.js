import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
//    const [ user, setUser] = useState(res.body.users)
 

    return (
        <div className="homepage">
            <h1>Hello </h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage