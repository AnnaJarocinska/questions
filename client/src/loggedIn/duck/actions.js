import types from './types';

const getUserName = (userName) => ({
    type: types.GET_USER_NAME,
    payload: {userName}
})

export default {
    getUserName
}