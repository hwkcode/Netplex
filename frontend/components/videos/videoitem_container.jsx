import { connect } from "react-redux";
import { removeFromList, addToList } from "../../actions/list_actions";
import VideoItem from "./videoitem";

const mapStateToProps = (state, ownProps) => ({
    video: ownProps.video,
    myVideos: state.entities.lists
});

const mapDispatchToProps = (dispatch) => ({
    addToList: (video) => dispatch(addToList(video)),
    removeFromList: (video) => dispatch(removeFromList(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoItem)




































// import { connect } from 'react-redux';
// import { addToList, removeFromList, fetchLists } from '../../actions/list_actions';
// import VideoItem from './videoitem';

// const mapStateToProps = (state, ownProps) => {
//     return {
//         videos: state.entities.videos,
//         video: ownProps.video,
//         id: state.session.id,
//         inList: state.entities.lists.includes(ownProps.video.id),
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToList: (list) => dispatch(addToList(list)),
//         deleteListItem: (videoId) => dispatch(removeFromList(videoId)),
//         fetchList: (userId) => dispatch(fetchLists(userId)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(VideoItem);