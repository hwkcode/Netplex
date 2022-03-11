import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_MY_VIDEOS = "RECEIVE_MY_VIDEOS";
export const RECEIVE_MY_VIDEO = "RECEIVE_MY_VIDEO";
export const REMOVE_MY_VIDEO = "REMOVE_MY_VIDEO";


const receiveMyVideos = videos => ({
    type: RECEIVE_MY_VIDEOS,
    videos
});

const receiveMyVideo = (video) => ({
    type: RECEIVE_MY_VIDEO,
    video
})

const removeMyVideo = (video) => ({
    type: REMOVE_MY_VIDEO,
    video
})

export const fetchMyList = () => dispatch => (
    ListAPIUtil.fetchMyList()
        .then(videos => dispatch(receiveMyVideos(videos)))
);

export const addToList = video => dispatch => (
    ListAPIUtil.addToList(video.id)
        .then(video => dispatch(receiveMyVideo(video)))
);

export const removeFromList = video => dispatch => (
    ListAPIUtil.removeFromList(video.id)
        .then(() => dispatch(removeMyVideo(video)))
);