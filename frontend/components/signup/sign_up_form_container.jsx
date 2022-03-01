import { connect } from "react-redux";
import React from "react";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);
export default SignupFormContainer;