import { RECEIVE_GENRES } from '../actions/genre_actions';
import { RECEIVE_ALL_VIDEOS } from '../actions/video_actions';

const genresReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GENRES:
            // debugger
            return action.genres;
        // case RECEIVE_ALL_VIDEOS:
        //     return Object.assign({}, action.payload.genres);
        default:
            return state;
    }
};

export default genresReducer;