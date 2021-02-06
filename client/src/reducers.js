import { combineReducers } from 'redux';
import quickGameReducer from './quick game/duck';
import realGameReducer from './real game/duck';
import loggedInReducer from './loggedIn/duck';
import viewReducer from './view/duck';

const rootReducer = combineReducers({
    quickGame: quickGameReducer,
    realGame: realGameReducer,
    view: viewReducer,
    loggedIn: loggedInReducer

})

export default rootReducer;