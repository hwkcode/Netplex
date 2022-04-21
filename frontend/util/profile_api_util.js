export const createProfile = (profile) => (
    $.ajax({
        method: 'POST',
        url: '/api/profiles',
        data: { profile }
    })
);

export const updateProfile = (profile) => (
    $.ajax({
        method: 'PUT',
        url: `/api/profiles/${profile.id}`,
        data: { profile }
    })
);

export const deleteProfile = (profile) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/profiles/${profile.id}`
    })
);


export const retrieveProfiles = () => (
    $.ajax({
        method: 'GET',
        url: '/api/profiles'
    })
);

export const activateProfile = (profile) => (
    $.ajax({
        method: 'POST',
        url: '/api/profile_session',
        data: { profile }
    })
);

