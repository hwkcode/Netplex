import { RECEIVE_MY_VIDEOS, RECEIVE_MY_VIDEO, REMOVE_MY_VIDEO } from '../actions/list_actions';

const listReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_MY_VIDEOS:
            return Object.assign({}, action.videos);
        case RECEIVE_MY_VIDEO:
            nextState[action.video.id] = action.video;
            return nextState
        case REMOVE_MY_VIDEO:
            delete nextState[action.video.id];
            return nextState;
        default:
            return state;
    }
};

export default listReducer;