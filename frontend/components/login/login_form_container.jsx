import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;