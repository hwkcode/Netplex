export const fetchGenres = () => (
    $.ajax({
        url: 'api/genres'
    })
);