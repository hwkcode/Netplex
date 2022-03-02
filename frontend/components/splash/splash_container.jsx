import { connect } from 'react-redux';
import SplashPage from './splash_page';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users }, errors }) => ({
    currentUser: users[session.id],
    errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (demo) => dispatch(login(demo))
});

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashPage);
export default SplashContainer; 