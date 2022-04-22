import { RECEIVE_PROFILE, RECEIVE_PROFILES, REMOVE_PROFILE } from "../actions/profile_actions";

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PROFILES:
            return action.profiles;
        case RECEIVE_PROFILE:
            newState[action.profile.id] = action.profile;
            return newState;
        case REMOVE_PROFILE:
            delete newState[action.profile.id];
            return newState;
        default:
            return state;
    }
};

export default profilesReducer;