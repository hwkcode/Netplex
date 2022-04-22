import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video;
            return newState;
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({}, action.videos);
        default:
            return state;
    }
};

export default videosReducer;