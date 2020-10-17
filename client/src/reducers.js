import { combineReducers } from 'redux';
import gameReducer from './game/duck';
import viewReducer from './view/duck';

const rootReducer = combineReducers({
    game: gameReducer,
    view: viewReducer,

})

export default rootReducer;