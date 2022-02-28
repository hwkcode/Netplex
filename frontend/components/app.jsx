import React from "react";
import { Switch } from 'react-router-dom';

import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./signup/sign_up_form_container";
import SplashPage from "./splash/splash_page";
import SignupMessage from "./signup/signup_message";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        {/* <h1>Netplex will be legendary!</h1> */}
        <Switch>
            <AuthRoute Route exact path='/' component={SplashPage} />
            <AuthRoute Route path='/login' component={LoginFormContainer} />
            <AuthRoute Route path='/signup' component={SignupFormContainer} />
            <AuthRoute Route path='/signup1' component={SignupMessage} />
        </Switch>
    </div>
);

export default App;