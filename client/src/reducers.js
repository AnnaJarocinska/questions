import { combineReducers } from 'redux';
import gameReducer from './game/duck';
import loggedInReducer from './loggedIn/duck';
import viewReducer from './view/duck';

const rootReducer = combineReducers({
    game: gameReducer,
    view: viewReducer,
    loggedIn: loggedInReducer

})

export default rootReducer;