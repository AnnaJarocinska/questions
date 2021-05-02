import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameReducer from './game/duck';
import viewReducer from './view/duck';

const viewPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['loggedIn']
  }

const rootReducer = combineReducers({
    game: gameReducer,
    view: persistReducer(viewPersistConfig, viewReducer)
})

export default rootReducer;