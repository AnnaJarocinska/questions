import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  admin: false,
  user: false,
  unnamed: true,
}

const viewReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

    case types.ADMIN_LOGGEDIN:
        return(
          draft.admin = !draft.admin,
          draft.unnamed = !draft.unnamed
        )
        break;

    case types.ADMIN_LOGGEDOUT:
      return(
        draft.admin = false,
        draft.unnamed = true
      )
        break;
     
    case types.USER_LOGGEDIN:
      return(
        draft.user = true,
        draft.unnamed = false
      )
        break;    
    
    
    case types.USER_LOGGEDOUT:
      return(
        draft.user = false,
        draft.unnamed = true
      )
        break;

      default:
        return draft
    }
  })

export default viewReducer;