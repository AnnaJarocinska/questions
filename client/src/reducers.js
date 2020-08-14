import {combineReducers} from 'redux';
import gameReducer from './game/duck';


const rootReducer = combineReducers({
    game: gameReducer,

})

export default rootReducer;