import types from './types';

const adminLoggedIn = () => ({
    type: types.ADMIN_LOGGEDIN,
})

const adminLoggedOut = () => ({
    type: types.ADMIN_LOGGEDOUT
})

const userLoggedIn = () => ({
    type: types.USER_LOGGEDIN,
})

const userLoggedOut = () => ({
    type: types.USER_LOGGEDOUT
})


export default {
    adminLoggedIn,
    adminLoggedOut,
    userLoggedIn,
    userLoggedOut
}