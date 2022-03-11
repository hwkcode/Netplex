import { RECEIVE_MY_VIDEOS, RECEIVE_MY_VIDEO, REMOVE_MY_VIDEO } from '../actions/list_actions';


const _nullState = [];

const listReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_MY_VIDEOS:
            nextState = action.videos
            return nextState;
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