import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  admin: false,
  user: false,
  unnamed: true,
  userName: '', 
  created: '',
  adminn:''
}

const viewReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case types.ADMIN_LOGGEDIN:
          draft.admin = !draft.admin;
          draft.unnamed = !draft.unnamed;
          break;
      
      case types.ADMIN_LOGGEDOUT:
          draft.admin = false;
          draft.unnamed = true;
          break;

      case types.USER_LOGGEDIN:
          draft.user = !draft.user;
          draft.unnamed = !draft.unnamed;
          draft.userName = action.payload.userName;
          draft.created = action.payload.created;
          draft.adminn = action.payload.admin;
          break;

      case types.USER_LOGGEDOUT:
          draft.user = false;
          draft.unnamed = true;
          break;
          
      default:
        return draft
    }
  })

export default viewReducer;