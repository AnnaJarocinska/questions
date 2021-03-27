import { combineReducers } from 'redux';
import quickGameReducer from './quick game/duck';
import realGameReducer from './real game/duck';
import viewReducer from './view/duck';

const rootReducer = combineReducers({
    quickGame: quickGameReducer,
    realGame: realGameReducer,
    view: viewReducer
})

export default rootReducer;