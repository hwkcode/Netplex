export const fetchMyList = () => (
    $.ajax({
        url: '/api/lists'
    })
);

export const addToList = video_id => (
    $.ajax({
        method: 'POST',
        url: 'api/lists',
        data: { video_id }
    })
);

export const removeFromList = video_id => (
    $.ajax({
        method: 'DELETE',
        url: `api/lists/${video_id}`,
    })
);