import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
import { fetchAllProfiles, activateProfile } from "../../actions/profile_actions";

const mapStateToProps = (state) => ({
    userId: state.session.id,
    // currentProfile: state.session.profile,
    profiles: state.entities.profiles
});

const mapDispatchToProps = (dispatch) => ({
    // debugger
    logout: () => dispatch(logout()),
    fetchAllProfiles: () => dispatch(fetchAllProfiles()),
    activateProfile: (profile) => dispatch(activateProfile(profile))
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;