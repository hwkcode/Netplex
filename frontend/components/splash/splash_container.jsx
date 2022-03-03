import { connect } from 'react-redux';
import SplashPage from './splash_page';
import { login, removeErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users }, errors }) => ({
    currentUser: users[session.id],
    errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (demo) => dispatch(login(demo)),
    removeErrors: () => dispatch(removeErrors())
});

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashPage);
export default SplashContainer; 