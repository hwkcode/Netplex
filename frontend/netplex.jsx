import React from "react";
import ReactDOM from 'react-dom';
import { signup, login, logout } from '../frontend/util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Create something you're proud of!</h1>, root);
    window.login = login;
    window.logout = logout;
    window.signup = signup;
});