import React from "react";
import { Switch } from 'react-router-dom';

import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./signup/sign_up_form_container";
import BrowsePage from "./browse/browse_page";
import SplashContainer from "./splash/splash_container";
import SignupMessage from "./signup/signup_message";
import ProfileContainer from './profile/profile_index_container';
import MyListContainer from './list/my_list_container';
import VideoWatchContainer from "./videos/videowatch_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        {/* <h1>Netplex will be legendary!</h1> */}
        <Switch>
            <AuthRoute Route exact path='/' component={SplashContainer} />
            <AuthRoute Route path='/login' component={LoginFormContainer} />
            <AuthRoute Route path='/signup' component={SignupFormContainer} />
            <AuthRoute Route path='/signup1' component={SignupMessage} />
            <ProtectedRoute path="/browse" component={BrowsePage} />
            <ProtectedRoute path="/profiles" component={ProfileContainer} />
            <ProtectedRoute exact path='/mylist' component={MyListContainer} />
            <ProtectedRoute exact path='/videos/:id' component={VideoWatchContainer} />
        </Switch>
    </div>
);

export default App;