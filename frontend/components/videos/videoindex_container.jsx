import { connect } from "react-redux";
import VideoIndex from "./videoindex";

const mapStateToProps = (state) => {
    // debugger
    return {
        videos: state.entities.videos,
        // genre: ownProps.genre
    }
};

export default connect(mapStateToProps)(VideoIndex);







































// import { connect } from 'react-redux';
// // import { fetchAllVideos } from '../../actions/video_actions';
// import VideoIndex from "./videoindex";
// // import { fetchAllGenres } from '../../actions/genre_actions';
// // import { fetchLists, addToList, removeFromList } from '../../actions/list_actions';


// const mapStateToProps = (state, ownProps) => {
//     return {
//         videos: state.entities.videos,
//         genre: ownProps.genre
//         // allVideosArray: Object.values(state.entities.videos),
//         // allVideosArray: state.entities.videos,
//         // allGenresArray: Object.values(state.entities.genres),
//         // list: state.entities.lists,
//         // userId: state.session.id,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // fetchAllVideos: () => dispatch(fetchAllVideos()),
//         // fetchVideo: (video_id) => dispatch(fetchVideo(video_id)),
//         // fetchAllGenres: () => dispatch(fetchAllGenres()),
//         // fetchLists: () => dispatch(fetchLists()),
//         // addToList: (videoId) => dispatch(addToList(videoId)),
//         // removeFromList: (videoId) => dispatch(removeFromList(videoId)),
//     };
// };
// // debugger
// export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);