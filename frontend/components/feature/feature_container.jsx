import { connect } from 'react-redux';
import { fetchAllVideos } from '../../actions/video_actions';
import Feature from "./feature";
import { fetchMyList, addToList, removeFromList } from '../../actions/list_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        allVideosArray: Object.values(state.entities.videos),
        allGenresArray: Object.values(state.entities.genres),
        list: state.entities.lists,
        userId: state.session.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllVideos: () => dispatch(fetchAllVideos()),
        fetchMyList: () => dispatch(fetchMyList()),
        addToList: (videoId) => dispatch(addToList(videoId)),
        removeFromList: (videoId) => dispatch(removeFromList(videoId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);