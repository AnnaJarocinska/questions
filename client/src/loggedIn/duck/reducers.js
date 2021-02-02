import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  
  userName: '', 
}

const loggedInReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_USER_NAME:
        console.log(action.payload.userName, 'action.payload')
        draft.userName = action.payload.userName;
        console.log('ADD-user')
        break;

      default:
        return draft
    }
  })

export default loggedInReducer;