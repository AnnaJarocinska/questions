import types from './types';

const addUserName = (userName) => ({
    type: types.ADD_USER_NAME,
    payload: {userName}
})

export default {
    addUserName
}