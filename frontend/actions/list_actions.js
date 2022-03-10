import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST_VIDEO = "REMOVE_LIST_VIDEO";


const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists
});

const receiveList = list => ({
    type: RECEIVE_LIST,
    list
});

const removeListVideo = videoId => ({
    type: REMOVE_LIST_VIDEO,
    videoId
});

export const fetchLists = () => dispatch => (
    ListAPIUtil.fetchLists()
        .then(lists => dispatch(receiveLists(lists)))
);

export const addToList = list => dispatch => (
    ListAPIUtil.addToList(list)
        .then(list => dispatch(receiveList(list)))
);

export const removeFromList = list => dispatch => (
    ListAPIUtil.removeFromList(list)
        .then(() => dispatch(removeListVideo(list.video_id)))
);