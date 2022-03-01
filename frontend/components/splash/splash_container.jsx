import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const SplashContainer = connect(mapStateToProps)(SplashPage);
export default SplashContainer; 