export const fetchLists = userId => (
    $.ajax({
        url: '/api/lists'
    })
);

export const addToList = list => (
    $.ajax({
        method: 'POST',
        url: `api/lists`,
        data: { list }
    })
);

export const removeFromList = list => (
    $.ajax({
        method: 'DELETE',
        url: `api/lists/${videoId}`,
        data: { list }
    })
);