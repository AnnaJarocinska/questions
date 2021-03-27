import types from './types';

const addUserName = (userName, created, adminn) => ({
    type: types.ADD_USER_NAME,
    payload: {userName, created, adminn}
})

export default {
    addUserName
}