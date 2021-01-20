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
        return {
          admin: !draft.admin,
          unnamed: !draft.unnamed,
        }
        
      case types.ADMIN_LOGGEDOUT:
        return {
          admin: false,
          unnamed: true,
        }
        // break;

      case types.USER_LOGGEDIN:
      return {
        user: !draft.user,
        unnamed: !draft.unnamed,
      }
      // break;


      case types.USER_LOGGEDOUT:
        return {
          user:false,
          unnamed: true,
        }
        // break;

      case types.IS_HOMEPAGE:
        return !draft.home
        // break;
      default:
        return draft
    }
  })

export default viewReducer;