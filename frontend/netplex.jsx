import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import { signup, login, logout } from '../frontend/util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Create something you're proud of!</h1>, root);
    
    // test
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});