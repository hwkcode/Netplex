import { connect } from 'react-redux';
import VideoIndexes from "./videoindexes";
import { fetchAllVideos } from '../../actions/video_actions';
import { fetchAllGenres } from '../../actions/genre_actions';
import { fetchMyList } from '../../actions/list_actions';

const mapStateToProps = (state) => {
    // debugger
    return {
        genres: state.entities.genres,
        videos: state.entities.videos,
        //         allVideosArray: Object.values(state.entities.videos),
        //         allGenresArray: Object.values(state.entities.genres),
        //         list: state.entities.lists,
        //         userId: state.session.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        fetchAllVideos: () => dispatch(fetchAllVideos()),
        // fetchVideo: (video_id) => dispatch(fetchVideo (video_id)),
        fetchAllGenres: () => dispatch(fetchAllGenres()),
        fetchMyList: () => dispatch(fetchMyList()),
        // addToList: (videoId) => dispatch(addToList(videoId)),
        // removeFromList: (videoId) => dispatch(removeFromList(videoId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndexes);