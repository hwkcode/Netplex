import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILES = 'RECEIVE_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';

export const receiveProfile = (profile) => ({
    type: RECEIVE_PROFILE,
    profile
});

export const receiveUserProfiles = (profiles) => ({
    type: RECEIVE_PROFILES,
    profiles
});

export const removeProfile = (profile) => ({
    type: REMOVE_PROFILE,
    profile
});

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
});

export const createProfile = (profile) => (dispatch) => {
    return ProfileAPIUtil.createProfile(profile)
        .then((response) => dispatch(receiveProfile(response)));
};


export const updateProfile = (profile) => (dispatch) => {
    return ProfileAPIUtil.updateProfile(profile)
        .then(response => dispatch(receiveProfile(response)));
};

export const deleteProfile = (profile) => (dispatch) => {
    return ProfileAPIUtil.deleteProfile(profile)
        .then(() => dispatch(removeProfile(profile)));
};

export const fetchAllProfiles = () => (dispatch) => {
    return ProfileAPIUtil.retrieveProfiles()
        .then(profiles => dispatch(receiveUserProfiles(profiles)));
};

export const activateProfile = (profile) => (dispatch) => {
    return ProfileAPIUtil.activateProfile(profile)
        .then(() => dispatch(setProfile(profile)));
};