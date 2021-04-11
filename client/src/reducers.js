import { combineReducers } from 'redux';
import realGameReducer from './real game/duck';
import viewReducer from './view/duck';

const rootReducer = combineReducers({
    realGame: realGameReducer,
    view: viewReducer
})

export default rootReducer;