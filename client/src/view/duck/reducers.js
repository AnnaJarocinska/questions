import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  admin: false,
  user: false,
  unnamed: true,
  home: false
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
          break;

      case types.USER_LOGGEDOUT:
          draft.user = false;
          draft.unnamed = true;
          break;

      case types.IS_HOMEPAGE:
          draft.home = !draft.home;
          break;
      default:
        return draft
    }
  })

export default viewReducer;