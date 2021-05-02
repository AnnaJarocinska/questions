import types from './types';
import produce from 'immer';
import { REHYDRATE } from 'redux-persist';

const INITIAL_STATE = {
 
  user: false,
  admin: false,
  unnamed: true,
  userName: '', 
  created: '',
  adminn: false
}

const viewReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case REHYDRATE:
          break;
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
          draft.userName = "";
          draft.created = "";
          draft.adminn = false;
          break;

      default:
        return draft
    }
  })

export default viewReducer;