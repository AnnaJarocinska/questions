import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  
  userName: '', 
  created: 'jjj',
  adminn: ''
}

const loggedInReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      
      case types.ADD_USER_NAME:
        draft.userName = action.payload.userName;
        draft.created = action.payload.created;
        draft.adminn = action.payload.admin;
        break;

      default:
        return draft
    }
  })

export default loggedInReducer;