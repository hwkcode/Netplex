import { connect } from 'react-redux';
import VideoIndexes from "./videoindexes";
import { fetchAllVideos } from '../../actions/video_actions';
import { fetchAllGenres } from '../../actions/genre_actions';
import { fetchMyList } from '../../actions/list_actions';

const mapStateToProps = (state) => {
    return {
        genres: state.entities.genres,
        videos: state.entities.videos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllVideos: () => dispatch(fetchAllVideos()),
        fetchAllGenres: () => dispatch(fetchAllGenres()),
        fetchMyList: () => dispatch(fetchMyList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndexes);