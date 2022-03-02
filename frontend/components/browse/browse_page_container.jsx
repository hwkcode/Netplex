import { connect } from "react-redux";
import BrowsePage from "./browse_page";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const BrowsePageContainer = connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
export default BrowsePageContainer;