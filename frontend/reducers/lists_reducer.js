import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST_VIDEO } from '../actions/list_actions';


const _nullState = [];

const listReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_LISTS:
            nextState = action.lists.video_ids;
            return nextState;
        case RECEIVE_LIST:
            nextState.push(action.list.video_id);
            return nextState;
        case REMOVE_LIST_VIDEO:
            nextState.splice(nextState.indexOf(action.videoId), 1);
            return nextState;
        default:
            return state;
    }
};

export default listReducer;