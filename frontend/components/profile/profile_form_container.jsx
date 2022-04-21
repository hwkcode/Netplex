import { connect } from "react-redux";
import { createProfile, updateProfile, deleteProfile } from "../../actions/profile_actions";
import ProfileForm from "./profile_form";

const mapStateToProps = (state, ownProps) => ({
    profile: ownProps.profile,
    submitForm: ownProps.submitForm,
    cancel: ownProps.cancel
});

const mapDispatchToProps = (dispatch) => ({
    createProfile: (profile) => dispatch(createProfile(profile)),
    updateProfile: (profile) => dispatch(updateProfile(profile)),
    deleteProfile: (profile) => dispatch(deleteProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);