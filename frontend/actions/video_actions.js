import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

const receiveAllVideos = payload => ({
    type: RECEIVE_ALL_VIDEOS,
    payload
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

export const fetchAllVideos = () => dispatch => {
    return VideoAPIUtil.fetchAllVideos()
        .then(payload => dispatch(receiveAllVideos(payload)));
};

export const fetchVideo = videoId => dispatch => {
    return APIVideoUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)));
};