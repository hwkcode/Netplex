export const fetchAllVideos = () => (
    $.ajax({
        url: `api/videos`
    })
);

export const fetchVideo = videoId => (
    $.ajax({
        url: `api/videos/${videoId}`
    })
);