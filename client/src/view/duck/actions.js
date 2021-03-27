import types from './types';

const adminLoggedIn = () => ({
    type: types.ADMIN_LOGGEDIN,
})

const adminLoggedOut = () => ({
    type: types.ADMIN_LOGGEDOUT
})

const userLoggedIn = (userName, created, adminn) => ({
    type: types.USER_LOGGEDIN,
    payload: {userName, created, adminn}
})

const userLoggedOut = () => ({
    type: types.USER_LOGGEDOUT
})

const isHomepage = () => ({
    type: types.IS_HOMEPAGE
})


export default {
    adminLoggedIn,
    adminLoggedOut,
    userLoggedIn,
    userLoggedOut,
    isHomepage
}