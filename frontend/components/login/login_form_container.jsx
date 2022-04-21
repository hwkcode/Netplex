import { connect } from "react-redux";
import { login, removeErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;