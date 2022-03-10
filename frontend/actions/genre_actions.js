import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = "RECEIVE_GENRES";

const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
});

export const fetchAllGenres = () => dispatch => (
    GenreAPIUtil.fetchGenres()
        .then(genres => dispatch(receiveGenres(genres)))
);