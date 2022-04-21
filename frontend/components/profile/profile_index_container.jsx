import { connect } from "react-redux";
import ProfileIndex from "./profile_index";
import { logout } from "../../actions/session_actions";
import { fetchAllProfiles, createProfile, updateProfile, deleteProfile, activateProfile } from "../../actions/profile_actions";

const mapStateToProps = (state) => ({
    profiles: state.entities.profiles
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllProfiles: () => dispatch(fetchAllProfiles()),
    createProfile: (profile) => dispatch(createProfile(profile)),
    updateProfile: (profile) => dispatch(updateProfile(profile)),
    deleteProfile: (profile) => dispatch(deleteProfile(profile)),
    activateProfile: (profile) => dispatch(activateProfile(profile)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex);