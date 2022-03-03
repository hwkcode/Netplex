import React from "react";
import { Switch } from 'react-router-dom';

import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./signup/sign_up_form_container";
import BrowsePageContainer from "./browse/browse_page_container";
import SplashContainer from "./splash/splash_container";
import SignupMessage from "./signup/signup_message";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        {/* <h1>Netplex will be legendary!</h1> */}
        <Switch>
            <AuthRoute Route exact path='/' component={SplashContainer} />
            <AuthRoute Route path='/login' component={LoginFormContainer} />
            <AuthRoute Route path='/signup' component={SignupFormContainer} />
            <AuthRoute Route path='/signup1' component={SignupMessage} />
            <ProtectedRoute path="/browse" component={BrowsePageContainer} />
        </Switch>
    </div>
);

export default App;