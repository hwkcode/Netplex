import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.id,
});

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {logout: () => dispatch(logout())}
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;