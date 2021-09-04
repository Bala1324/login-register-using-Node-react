import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import VerifyUser from "./components/verifyUser/VerifyUser"
import Resetpassword from "./components/resetPassword/Resetpassword"
import VerifyOTP from "./components/verifyOTP/VerifyOTP"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/verifyUser">
            <VerifyUser />
          </Route>
          <Route path="/verifyOtp">
            <VerifyOTP />
          </Route>
          <Route path="/resetpassword">
            <Resetpassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
