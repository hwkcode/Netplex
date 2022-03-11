import { connect } from "react-redux";
import { fetchVideo } from "../../actions/video_actions";
import VideoWatch from "./videowatch";

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.id],
    id: ownProps.match.params.id,
    user_id: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchVideo: () => dispatch(fetchVideo(ownProps.match.params.id))

});


export default connect(mapStateToProps, mapDispatchToProps)(VideoWatch);