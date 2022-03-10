import { connect } from 'react-redux';
import { addToList, removeFromList, fetchLists } from '../../actions/list_actions';
import VideoItem from './videoitem';

const mapStateToProps = (state, ownProps) => {
    return {
        video: ownProps.video,
        id: state.session.id,
        inList: state.entities.lists.includes(ownProps.video.id),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToList: (list) => dispatch(addToList(list)),
        deleteListItem: (videoId) => dispatch(removeFromList(videoId)),
        fetchList: (userId) => dispatch(fetchLists(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoItem);